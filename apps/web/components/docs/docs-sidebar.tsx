'use client';

import { Sidebar, SidebarContent } from '@workspace/ui/components/sidebar';
import { source } from '@/lib/source';
import { usePathname } from 'next/navigation';

export function DocsSidebar({
                              tree,
                              ...props
                            }: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();
  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0">

        </div>

      </SidebarContent>

    </Sidebar>
  );
}