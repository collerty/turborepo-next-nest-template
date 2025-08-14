import { cache } from 'react';

export const getApiUrl = cache(() => {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error('No api url provided');
  }

  return apiUrl;
});