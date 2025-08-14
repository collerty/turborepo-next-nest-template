import { Card, CardContent } from '@workspace/ui/components/card';
import { Comment } from '@workspace/zod-schemas';


export function CommentCards({ comments }: { comments: Comment[] }) {

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          Number of comments: 0
        </div>
        <div>
          Sort by Icon
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {comments.map((comment: Comment, index: number) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card>
      <CardContent>{comment.content}</CardContent>
    </Card>
  );
}