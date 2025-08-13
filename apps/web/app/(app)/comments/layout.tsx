import { TooltipProvider } from '@workspace/ui/components/tooltip';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  );
}