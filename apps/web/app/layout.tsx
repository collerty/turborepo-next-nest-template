import { Geist, Geist_Mono } from 'next/font/google';

import '@workspace/ui/globals.css';
import { Providers } from '@/components/providers';
import { SiteHeader } from '@/components/header/site-header';
import { cn } from '@workspace/ui/lib/utils';
import { fontVariables } from '@workspace/ui/lib/fonts';
import { Toaster } from '@workspace/ui/components/sonner';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'text-foreground font-sans antialiased group/body overscroll-none  [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]',
        fontVariables,
      )}
    >
    <Providers>
      <SiteHeader />
      {children}
      <TailwindIndicator/>
      <Toaster position="top-center" />
    </Providers>
    </body>
    </html>
  );
}
