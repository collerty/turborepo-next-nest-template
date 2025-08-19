'use server';

import { fetcher } from '@/lib/actions/(shared)/fetcher';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { CommentCreateInput } from '@workspace/zod-schemas';

export async function getComments() {
  try {
    const data = await fetch(`${getApiUrl()}/comments/`);

    return await data.json();
  } catch (e) {
    // TODO: idk how to type it
    console.log(e);
  }
}

export async function addComment(comment: CommentCreateInput) {
  try {
    const newComment = await fetcher(`${getApiUrl()}/comments/`, {
      body: JSON.stringify(comment),
      method: 'POST',
    }) as Comment;

    return newComment;
  } catch (e) {
    // TODO: idk how to type it
    console.log(e);
  }
}