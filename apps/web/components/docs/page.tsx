'use client';
import {
  type PageTree,
  type TableOfContents,
  type TOCItemType,
} from 'fumadocs-core/server';
import { type ComponentProps, type ReactNode, useMemo } from 'react';
import { AnchorProvider, useActiveAnchors } from 'fumadocs-core/toc';
import { cn } from '../../lib/cn';
import { useTreeContext } from 'fumadocs-ui/contexts/tree';
import { Link, usePathname } from 'fumadocs-core/framework';
import { DocsTableOfContents } from '@/components/docs/docs-toc';

export interface DocsPageProps {
  toc?: TableOfContents;

  children: ReactNode;
}

export function DocsPage({ toc = [], ...props }: DocsPageProps) {
  return (
    <AnchorProvider toc={toc}>
      <div
        data-slot="docs"
        className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="h-(--top-spacing) shrink-0" />
          <div
            className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
            <div className="flex flex-col gap-2">
              {/*<div className="flex flex-col gap-2">*/}
              {/*  /!*<div className="flex items-start justify-between">*!/*/}
              {props.children}
              <Footer />
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {toc.length > 0 && (
          <div
            className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
            <div className="h-(--top-spacing) shrink-0" />
            <div className="no-scrollbar overflow-y-auto px-8">
              <DocsTableOfContents toc={toc} />
              <div className="h-12" />
            </div>
          </div>
        )}
      </div>
    </AnchorProvider>
  )
    ;
}

export function DocsBody(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('prose', props.className)}>
      {props.children}
    </div>
  );
}

export function DocsDescription(props: ComponentProps<'p'>) {
  // don't render if no description provided
  if (props.children === undefined) return null;

  return (
    <p
      {...props}
      className={cn('mb-8 text-lg text-fd-muted-foreground', props.className)}
    >
      {props.children}
    </p>
  );
}

export function DocsTitle(props: ComponentProps<'h1'>) {
  return (
    <h1 {...props} className={cn('text-3xl font-semibold', props.className)}>
      {props.children}
    </h1>
  );
}

function Footer() {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const flatten = useMemo(() => {
    const result: PageTree.Item[] = [];

    function scan(items: PageTree.Node[]) {
      for (const item of items) {
        if (item.type === 'page') result.push(item);
        else if (item.type === 'folder') {
          if (item.index) result.push(item.index);
          scan(item.children);
        }
      }
    }

    scan(root.children);
    return result;
  }, [root]);

  const { previous, next } = useMemo(() => {
    const idx = flatten.findIndex((item) => item.url === pathname);

    if (idx === -1) return {};
    return {
      previous: flatten[idx - 1],
      next: flatten[idx + 1],
    };
  }, [flatten, pathname]);

  return (
    <div className="flex flex-row justify-between gap-2 items-center font-medium">
      {previous ? <Link href={previous.url}>{previous.name}</Link> : null}
      {next ? <Link href={next.url}>{next.name}</Link> : null}
    </div>
  );
}
