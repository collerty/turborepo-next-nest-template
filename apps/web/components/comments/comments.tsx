import { Card, CardContent } from '@workspace/ui/components/card';
import { Comment } from '@workspace/zod-schemas';
import { getComments } from '@/lib/actions/comments.actions';


export async function CommentCards() {
  const comments = await getComments();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          Number of comments: 0
        </div>
        <div>
          Sort by Icon
        </div>
      </div>
      <div>
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