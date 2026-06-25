import type { ReactNode } from 'react';
import { Bot, User } from 'lucide-react';
import {
  avatarVariants,
  chatBubbleVariants,
  type ChatBubbleRole,
} from '../utils/variants';
import { cn } from '../utils/cn';

interface ChatBubbleProps {
  role: ChatBubbleRole;
  children: ReactNode;
}

export function ChatBubble({ role, children }: ChatBubbleProps) {
  const isUser = role === 'user';

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div className={avatarVariants[role]} aria-hidden="true">
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={chatBubbleVariants[role]}>{children}</div>
    </div>
  );
}
