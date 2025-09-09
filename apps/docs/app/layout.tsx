import { RootProvider } from "fumadocs-ui/provider";
import '@workspace/ui/globals.css';

export const metadata = {
  title: "Welcome to docs",
  description: "Turborepo docs",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className="flex flex-col min-h-screen">
    <RootProvider>{children}</RootProvider>
    </body>
    </html>
  );
}