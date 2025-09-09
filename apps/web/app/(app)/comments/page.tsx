import { AddCommentForm } from '@/components/comments/add-comment-form';
import { CommentCards, CommentCardsSkeleton } from '@/components/comments/comments';
import { addComment, getComments } from '@/lib/actions/comments.actions';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="container-wrapper flex-1 flex flex-col px-2">
      <div
        className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 [--top-spacing:0] lg:[--top-spacing:calc(var(--spacing)*4)] lg:grid grid-cols-1 [--comments-width:756px] justify-items-center">
        <div className="flex flex-col lg:w-(--comments-width) gap-4">
          <AuthDialog apiUrl={getApiUrl()} />
          <AddCommentForm addComment={addComment} />
          <Suspense fallback={<CommentCardsSkeleton />}>
            <CommentCards />
          </Suspense>
          {/*<CommentCardsSkeleton />*/}



        </div>
      </div>
    </div>
  );
}