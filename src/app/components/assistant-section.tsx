'use client';

import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { Sparkles } from 'lucide-react';
import {
  ASSISTANT_GREETING,
  RATE_LIMIT_MESSAGE,
  SITE_COPY,
  STARTER_PROMPTS,
} from '@/lib/resume/data';
import { ChatPanel, SectionHeader, Text, type ChatMessage } from '@/design-system';
import { createChatTransport } from './chat-transport';
import { trackEvent } from '@/lib/analytics';
import { ChatRateLimitError } from '@/lib/errors';
import type { ChatMode } from '@/app/schemas';

export interface AssistantSectionHandle {
  ask: (text: string) => void;
}

function getTextFromParts(message: { parts: Array<{ type: string; text?: string }> }) {
  return message.parts
    .filter(
      (part): part is { type: 'text'; text: string } =>
        part.type === 'text' && typeof part.text === 'string',
    )
    .map((part) => part.text)
    .join('');
}

export const AssistantSection = forwardRef<AssistantSectionHandle>(
  function AssistantSection(_, ref) {
    const [input, setInput] = useState('');
    const [mode, setMode] = useState<ChatMode>('chat');
    const [jobDescription, setJobDescription] = useState('');
    const [rateLimitMessage, setRateLimitMessage] = useState<string | undefined>();
    const [chatError, setChatError] = useState<string | undefined>();
    const modeRef = useRef(mode);
    const jobDescriptionRef = useRef(jobDescription);

    modeRef.current = mode;
    jobDescriptionRef.current = jobDescription;

    const transport = useMemo(
      () => createChatTransport(() => modeRef.current, () => jobDescriptionRef.current),
      [],
    );

    const { messages, sendMessage, status } = useChat<UIMessage>({
      messages: [
        {
          id: 'welcome',
          role: 'assistant',
          parts: [{ type: 'text', text: ASSISTANT_GREETING }],
        },
      ],
      transport,
      onError: (error) => {
        if (error instanceof ChatRateLimitError) {
          setRateLimitMessage(RATE_LIMIT_MESSAGE);
          trackEvent('chat_rate_limited');
          return;
        }
        setChatError(SITE_COPY.chat.genericError);
        trackEvent('chat_error');
      },
    });

    const uiMessages: ChatMessage[] = messages.map((message) => ({
      id: message.id,
      role: message.role === 'user' ? 'user' : 'assistant',
      text: getTextFromParts(message),
    }));

    const send = (
      text: string,
      analyticsEvent?: 'chat_message_sent' | 'chat_starter_clicked' | 'job_fit_submit',
    ) => {
      const trimmed = text.trim();
      if (!trimmed || status === 'streaming' || status === 'submitted') return;

      setRateLimitMessage(undefined);
      setChatError(undefined);
      if (analyticsEvent) trackEvent(analyticsEvent);
      sendMessage({ text: trimmed });
      setInput('');
    };

    useImperativeHandle(ref, () => ({
      ask: (text: string) => {
        modeRef.current = 'chat';
        setMode('chat');
        send(text, 'chat_message_sent');
      },
    }));

    return (
      <section id="assistant" className="mb-20 scroll-mt-6">
        <SectionHeader icon={Sparkles} title={SITE_COPY.sections.assistant.title} />
        <Text variant="muted" className="mb-5 max-w-2xl">
          {SITE_COPY.sections.assistant.disclaimer}
        </Text>
        <ChatPanel
          messages={uiMessages}
          starters={[...STARTER_PROMPTS]}
          input={input}
          mode={mode}
          jobDescription={jobDescription}
          isStreaming={status === 'streaming' || status === 'submitted'}
          rateLimitMessage={rateLimitMessage ?? chatError}
          copy={SITE_COPY.chat}
          onInputChange={setInput}
          onJobDescriptionChange={setJobDescription}
          onModeChange={(nextMode) => {
            setMode(nextMode);
            trackEvent('chat_mode_changed', { mode: nextMode });
          }}
          onSubmit={() => send(input, 'chat_message_sent')}
          onStarterClick={(prompt) => send(prompt, 'chat_starter_clicked')}
          onJobFitSubmit={() => {
            if (!jobDescription.trim()) return;
            modeRef.current = 'job-fit';
            setMode('job-fit');
            send(jobDescription, 'job_fit_submit');
          }}
        />
      </section>
    );
  },
);
