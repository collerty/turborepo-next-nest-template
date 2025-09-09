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
import { getProfile } from '@/lib/actions/auth.actions';
import Image from 'next/image';
import { User } from '@workspace/zod-schemas';
import { LogOutIcon } from 'lucide-react';
import { LogoutButton } from '@/components/auth/logout';
import { Skeleton } from '@workspace/ui/components/skeleton';

export async function CommentsAuth({ apiUrl }: { apiUrl: string }) {
  const user: User = await getProfile();

  return (
    <div className="w-full min-h-11">
      {user?.id ? <UserProfile user={user} /> :
        <AuthDialog apiUrl={apiUrl} />
      }
    </div>
  );
}


export function UserProfile({ user }: { user: User }) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">

      <div className="bg-muted rounded-full w-11 h-11">
        {/*  icon */}
        {user.picture ?
          <Image src={user.picture} alt="profile-pic" width={44} height={44} className="rounded-full" /> : null
        }
      </div>
      <div>
        {user.name}
      </div>
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}

export function CommentsAuthSkeleton() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">

        <Skeleton className="bg-muted rounded-full w-11 h-11">
        </Skeleton>
        <Skeleton className="h-4 w-[100px]">
        </Skeleton>
      </div>
      <Skeleton className="w-11 h-11">

      </Skeleton>
    </div>
  );
}

export function AuthDialog({ apiUrl }: { apiUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="sm:min-w-80 w-full h-full">Sign In</Button>
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
