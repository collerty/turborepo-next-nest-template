'use client';
import { Button } from '@workspace/ui/components/button';
import { toast } from 'sonner';

export function ToastDemo() {
  return (
    <Button
      onClick={() => toast('Event has been created', {
        description: 'Sunday, December 03, 2025 at 6:30 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })}
    >
      Show toast
    </Button>
  );
}