import { Button } from '@workspace/ui/components/button';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import { Icons } from '@workspace/ui/components/icons';

export function GithubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferer">
        <Icons.gitHub />
      </Link>
    </Button>
  )
}