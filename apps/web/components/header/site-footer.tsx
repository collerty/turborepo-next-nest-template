'use client';

import { siteConfig } from '@/lib/config';
import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  const docsPages = pathname.includes('docs');
  return (
    <footer
      className="group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent group-has-[.docs-nav]/body:pb-20 group-has-[.docs-nav]/body:sm:pb-0 dark:bg-transparent">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="flex h-(--footer-height) items-center justify-between">
          <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
            Turborepo Template.
            {docsPages && (
              <>
                <br />
                UI inspired by {' '}
                <a
                  href={siteConfig.links.shadcn}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  shadcn
                </a>{' '}
                .
                Docs powered by {' '}
                <a
                  href={siteConfig.links.fumadocs}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Fumadocs
                </a>{' '}
                .
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}