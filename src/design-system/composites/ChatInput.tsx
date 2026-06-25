'use client';

import { Send } from 'lucide-react';
import { FormEvent } from 'react';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import { GlassCard } from '../primitives/GlassCard';
import { chatInputBarClasses } from '../utils/variants';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInputBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Ask a question…',
  disabled = false,
}: ChatInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={chatInputBarClasses}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Chat message"
      />
      <Button variant="send" type="submit" disabled={disabled || !value.trim()} aria-label="Send message">
        <Send size={16} />
      </Button>
    </form>
  );
}

export function ChatInputContainer({ children }: { children: React.ReactNode }) {
  return <GlassCard className="overflow-hidden">{children}</GlassCard>;
}
