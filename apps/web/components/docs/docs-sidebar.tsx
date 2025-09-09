"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// docs moved to apps/docs; keep component shape but decouple from source type
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { useTreeContext } from 'fumadocs-ui/contexts/tree';
import { useSidebar } from 'fumadocs-ui/contexts/sidebar';
import { useMemo } from 'react';
import type { PageTree } from 'fumadocs-core/server';

export function DocsSidebar({
                              tree,
                              ...props
                            }: React.ComponentProps<typeof Sidebar> & { tree: any }) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        {tree.children.map((item: any) => (
          <SidebarGroup key={item.$id}>
            <SidebarGroupLabel className="text-muted-foreground font-medium">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-0.5">
                  {item.children.map((item: any) => {
                    return (
                      item.type === "page" && (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton
                            asChild
                            isActive={item.url === pathname}
                            className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                          >
                            <Link href={item.url}>{item.name}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    )
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}