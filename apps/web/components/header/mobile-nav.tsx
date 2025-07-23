'use client';

import { source } from '@/lib/source';
import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import React from 'react';

export function MobileNav({
                            tree,
                            items,
                            className,
                          }: {
  tree: typeof source.pageTree,
  items: { href: string, label: string }[],
  className?: string
}) {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "extend-touch-target h-8 touch-manipulation items-center justify-start"
            )}
          >

          </Button>
        </PopoverTrigger>
        <PopoverContent>

        </PopoverContent>
      </Popover>
    )
}