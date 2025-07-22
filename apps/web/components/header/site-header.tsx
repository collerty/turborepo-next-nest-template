import { ModeToggle } from '@/components/header/mode-toggle';
import { NavHeader } from '@/components/header/nav-header';
import { Button } from '@workspace/ui/components/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Icons } from '@workspace/ui/components/icons';
import { MainNav } from '@/components/header/main-nav';

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
        </div>
      </div>
    </header>
  );
}