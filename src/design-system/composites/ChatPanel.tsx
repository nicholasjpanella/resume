'use client';

import { Bot } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '../primitives/Button';
import { Chip } from '../primitives/Chip';
import { Text } from '../primitives/Text';
import { Textarea } from '../primitives/Textarea';
import { ChatBubble } from './ChatBubble';
import { ChatMarkdown } from './ChatMarkdown';
import { ChatInputBar, ChatInputContainer } from './ChatInput';
import { avatarVariants } from '../utils/variants';

export type ChatMode = 'chat' | 'job-fit';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export interface ChatPanelCopy {
  placeholder: string;
  jobFitLabel: string;
  jobFitHelper: string;
  jobFitPlaceholder: string;
  analyzeFit: string;
  backToChat: string;
}

interface ChatPanelProps {
  messages: ChatMessage[];
  starters: string[];
  input: string;
  mode: ChatMode;
  jobDescription: string;
  isStreaming: boolean;
  rateLimitMessage?: string;
  copy: ChatPanelCopy;
  onInputChange: (value: string) => void;
  onJobDescriptionChange: (value: string) => void;
  onModeChange: (mode: ChatMode) => void;
  onSubmit: () => void;
  onStarterClick: (prompt: string) => void;
  onJobFitSubmit: () => void;
}

export function ChatPanel({
  messages,
  starters,
  input,
  mode,
  jobDescription,
  isStreaming,
  rateLimitMessage,
  copy,
  onInputChange,
  onJobDescriptionChange,
  onModeChange,
  onSubmit,
  onStarterClick,
  onJobFitSubmit,
}: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isStreaming]);

  return (
    <ChatInputContainer>
      <div
        ref={scrollRef}
        className="h-96 space-y-4 overflow-y-auto p-5"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            role={message.role === 'user' ? 'user' : 'assistant'}
          >
            {message.role === 'assistant' ? (
              <ChatMarkdown content={message.text} />
            ) : (
              message.text
            )}
          </ChatBubble>
        ))}
        {isStreaming && (
          <div className="flex gap-3">
            <div className={avatarVariants.assistant}>
              <Bot size={16} aria-hidden="true" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-1" aria-label="Assistant is typing">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-2 w-2 rounded-full bg-cyan-400/60 motion-safe:animate-bounce motion-reduce:animate-none"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {rateLimitMessage && (
          <Text variant="muted" className="text-center">
            {rateLimitMessage}
          </Text>
        )}
      </div>

      {mode === 'chat' ? (
        <>
          <div className="flex flex-wrap gap-2 px-5 pb-3">
            {starters.map((starter) => (
              <Chip key={starter} onClick={() => onStarterClick(starter)}>
                {starter}
              </Chip>
            ))}
            <Chip onClick={() => onModeChange('job-fit')}>{copy.jobFitLabel}</Chip>
          </div>
          <ChatInputBar
            value={input}
            onChange={onInputChange}
            onSubmit={onSubmit}
            placeholder={copy.placeholder}
            disabled={isStreaming}
          />
        </>
      ) : (
        <div className="space-y-3 border-t border-white/10 bg-black/20 p-4">
          <Text variant="muted">{copy.jobFitHelper}</Text>
          <Textarea
            value={jobDescription}
            onChange={(e) => onJobDescriptionChange(e.target.value)}
            placeholder={copy.jobFitPlaceholder}
            aria-label="Job description"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              variant="primary"
              className="h-auto px-4 py-2 text-sm"
              onClick={onJobFitSubmit}
              disabled={!jobDescription.trim() || isStreaming}
            >
              {copy.analyzeFit}
            </Button>
            <Button
              variant="ghost"
              className="h-auto px-4 py-2 text-sm"
              onClick={() => onModeChange('chat')}
            >
              {copy.backToChat}
            </Button>
          </div>
        </div>
      )}
    </ChatInputContainer>
  );
}
