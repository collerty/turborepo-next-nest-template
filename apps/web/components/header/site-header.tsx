import { ModeToggle, ModeToggleInstant } from '@/components/header/mode-toggle';
import { NavHeader } from '@/components/header/nav-header';
import { Button } from '@workspace/ui/components/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Icons } from '@workspace/ui/components/icons';
import { MainNav } from '@/components/header/main-nav';
import { GithubLink } from '@/components/header/github-link';
import { SeparatorVertical } from 'lucide-react';
import { Separator } from '@workspace/ui/components/separator';
import { SiteConfig } from '@/components/header/site-config';

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {/*<NavHeader />*/}
          {/*<ModeToggle />*/}
          {/*<MobileNav*/}
          {/*  tree={pageTree}*/}
          {/*  items={siteConfig.navItems}*/}
          {/*  classname="flex lg:hidden"*/}
          {/*  />*/}
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden size-8 lg:flex"
          >
            <Link href="/">
              <Icons.logo className="size-5" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center md:flex-1 md:justify-end gap-2">
            {/*<div>*/}
            {/*  <CommandMenu/>*/}
            {/*</div>*/}
            <GithubLink/>
            <Separator orientation="vertical" className="3xl:flex hidden" />
            <SiteConfig className="3xl:flex hidden"/>
            <Separator orientation="vertical" />
            <ModeToggleInstant />

          </div>
        </div>
      </div>
    </header>
  );
}