import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';
import { GithubButton } from './github-button';
import { GoogleButton } from '@/components/auth/google-button';

export function AuthDialog({ apiUrl }: { apiUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Sign In to leave a comment.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <GithubButton apiUrl={apiUrl} text="Sign In with Github" />
          <GoogleButton apiUrl={apiUrl} text="Sign In with Google" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
