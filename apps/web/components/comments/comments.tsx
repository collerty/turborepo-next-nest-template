import { Card, CardContent } from '@workspace/ui/components/card';
import { CommentWithAuthor } from '@workspace/zod-schemas';
import { getComments } from '@/lib/actions/comments.actions';
import { SortAscIcon, SortDesc } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '@workspace/ui/components/skeleton';


export async function CommentCards() {
  const comments: CommentWithAuthor[] = await getComments();
  return (
    <div className="flex flex-col gap-8 pt-12">
      <div className="flex justify-between">
        <div>
          Comments Left: {comments?.length}
        </div>
        <div>
          <SortDesc />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {comments.toReversed().map((comment: CommentWithAuthor, index: number) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: CommentWithAuthor }) {
  return (
    <Card className="flex flex-row px-4 py-4 gap-4">
      <div className="bg-muted rounded-full w-11 h-11">
        {/*  icon */}
        <Image src={comment.author.picture} alt="profile-pic" width={44} height={44} className="rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          {/*  name + date */}
          <CardContent className="px-0">{comment.author.name}</CardContent>
          <CardContent className="text-muted-foreground text-sm px-0">
            {new Date(comment.createdAt).toLocaleString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </CardContent>
        </div>
        <div>
          {/*  content */}
          <CardContent className="px-0">{comment.content}</CardContent>
        </div>
      </div>
    </Card>
  );
}

export async function CommentCardsSkeleton() {
  return (
    <div className="flex flex-col gap-8 pt-12">
      <div className="flex justify-between">
        <Skeleton className="w-[250px] h-4">

        </Skeleton>
        <div>
          <Skeleton className="bg-muted rounded-full w-6 h-6"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }).map((_, index: number) => (
          <CommentCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function CommentCardSkeleton() {
  return (
    <Card className="flex flex-row px-4 py-4 gap-4">
      <Skeleton className="bg-muted rounded-full w-11 h-11">
        {/*  icon */}
      </Skeleton>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {/*  name + date */}
          <Skeleton className="px-0 w-[100px] h-4"></Skeleton>
          <Skeleton className="w-[150px] h-3 px-0">
          </Skeleton>
        </div>
        <div>
          {/*  content */}
          <Skeleton className="px-0 w-[300px] h-4"></Skeleton>
        </div>
      </div>
    </Card>
  );
}