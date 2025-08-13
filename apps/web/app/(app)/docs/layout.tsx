import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import { SidebarProvider } from '@workspace/ui/components/sidebar';
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree';
import { DocsSidebar } from '@/components/docs/docs-sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container-wrapper flex flex-1 flex-col px-2">
      <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0]
      lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,_1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DocsSidebar tree={source.pageTree} />
        <TreeContextProvider tree={source.pageTree}>
          <div className="w-full h-full">
            {children}
          </div>
        </TreeContextProvider>
      </SidebarProvider>
    </div>
  );
}
