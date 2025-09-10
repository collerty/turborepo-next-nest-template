'use server';

import { fetcher } from '@/lib/actions/(shared)/fetcher';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { CommentCreateInput } from '@workspace/zod-schemas';
import { revalidateTag } from 'next/cache';
import { handleError } from '@/lib/actions/(shared)/handle-error';

export async function getComments(): Promise<Comment[] | null> {
  try {
    const data = await fetch(`${getApiUrl()}/comments/`, {
      next: { tags: ['comments'] },
    });

    return await data.json();
  } catch (e: unknown) {
    handleError(e);
    return null;
  }
}

export async function addComment(comment: CommentCreateInput) {
  try {
    const newComment = await fetcher(`${getApiUrl()}/comments/`, {
      body: JSON.stringify(comment),
      method: 'POST',
    }) as Comment;

    revalidateTag('comments');

    return newComment;
  } catch (e: unknown) {
    handleError(e);
    return null;
  }
}