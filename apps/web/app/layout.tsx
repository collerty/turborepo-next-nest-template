import { Geist, Geist_Mono } from 'next/font/google';

import '@workspace/ui/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/header/site-header';
import { cn } from '@workspace/ui/lib/utils';
import { fontVariables } from '@workspace/ui/lib/fonts';
import { Toaster } from '@workspace/ui/components/sonner';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { LayoutProvider } from '@/hooks/use-layout';

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
    <ThemeProvider>
      <LayoutProvider>
        <SiteHeader />
        {children}
        <TailwindIndicator />
        <Toaster position="top-center" />
      </LayoutProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
