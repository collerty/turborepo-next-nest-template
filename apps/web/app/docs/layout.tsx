// import { source } from '@/lib/source';
// import type { ReactNode } from 'react';
// import { baseOptions } from '@/layout.config';
// import { SidebarProvider } from '@workspace/ui/components/sidebar';
// import { DocsSidebar } from '@/components/docs/docs-sidebar';
// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
//
// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//       <div className="container-wrapper flex flex-1 flex-col px-2">
//         <SidebarProvider
//           className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
//           <DocsSidebar tree={source.pageTree}>
//             <div className="h-full w-full">
//               {children}
//             </div>
//           </DocsSidebar>
//         </SidebarProvider>
//       </div>
//   );
// }


import { source } from '@/lib/source';
import { DocsLayout } from '@/components/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/layout.config';
import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { SidebarProvider } from '@workspace/ui/components/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DocsLayout tree={source.pageTree}
                  {...baseOptions}>
        {children}
      </DocsLayout>
    </SidebarProvider>
  );
}


// import { source } from '@/lib/source';
// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
// import type { ReactNode } from 'react';
// import { baseOptions } from '@/layout.config';
// import { DocsSidebar } from '@/components/docs/docs-sidebar';
// import { SidebarProvider } from '@workspace/ui/components/sidebar';
//
// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <div className="container-wrapper flex flex-1 flex-col px-2">
//       <SidebarProvider
//         className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
//         <DocsLayout tree={source.pageTree} sidebar={
//           {
//             enabled: true,
//             component: <DocsSidebar tree={source.pageTree} />,
//           }
//         } {...baseOptions}>
//           <div className="w-full h-full">
//
//             {children}
//           </div>
//         </DocsLayout>
//       </SidebarProvider>
//     </div>
//   );
// }