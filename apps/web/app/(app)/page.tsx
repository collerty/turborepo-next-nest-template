import { Button } from "@workspace/ui/components/button"
import {ModeToggle} from "@/components/header/mode-toggle";
import { ToastDemo } from '@/components/toast-demo';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh bg-background">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <ToastDemo/>
          <ModeToggle />
      </div>
    </div>
  )
}
