'use client';

import { Button } from '@workspace/ui/components/button';
import { useLayout } from '@/hooks/use-layout';
import { cn } from '@workspace/ui/lib/utils';
import { GalleryHorizontal } from 'lucide-react';

export function SiteConfig({ className }: React.ComponentProps<typeof Button>) {
  const { layout, setLayout } = useLayout();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newLayout = layout === 'fixed' ? 'full' : 'fixed';
        setLayout(newLayout);
      }}
      className={cn('size-8', className)}
      title="Toggle layout"
    >
    <span className="sr-only">Toggle layout</span>
      <GalleryHorizontal />
    </Button>
  );
}