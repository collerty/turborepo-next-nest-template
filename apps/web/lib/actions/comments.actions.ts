"use server"

import { getApiUrl } from '@/lib/actions/api-url';

export async function getComments() {
  try {
    // TODO: implement custom fetcher when auth is ready
    const data = await fetch(`${getApiUrl()}/comments/`);

    return await data.json();
  } catch (e) {
    // TODO: idk how to type it
    console.log(e);
  }
}

export async function addComment() {
  try {
    const testComment = { title: 'test1', content: 'test1' };
    // TODO: implement custom fetcher when auth is ready
    const data = await fetch(`${getApiUrl()}/comments/`, {
      body: JSON.stringify(testComment), method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc1NTExMzIxNCwiZXhwIjoxNzU1MTE2ODE0fQ.DKwLk18zdRRKppVZ7syqtVJ2NoWjESrmhuXtFMF2vcA',
      },
    });
    return await data.json();
  } catch (e) {
    // TODO: idk how to type it
    console.log(e);
  }
}