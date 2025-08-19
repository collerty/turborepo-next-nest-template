'use server';

import { getAuthTokens, handleTokenRefresh } from './auth-tokens';

export async function fetcher(
  url: string,
  options: RequestInit = {},
  hasRetried = false,
): Promise<unknown> {
  const { accessToken, refreshToken } = await getAuthTokens();

  const headers: HeadersInit = {
    ...(options.headers as HeadersInit),
    'Content-Type': 'application/json',
    ...(accessToken?.value
      ? {
        Cookie: `accessToken=${accessToken.value}`,
      }
      : {}),
  };

  try {
    const res = await fetch(url, { ...options, headers, credentials: 'include' });

    // if (res.status === 401 && refreshToken?.value && !hasRetried) {
    //   console.log('Refreshing token and retrying...');
    //   await handleTokenRefresh();
    //   return fetcher(url, options, true);
    // }

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || `HTTP error ${res.status}`);
    }

    return res.json();
  } catch (err: any) {
    console.error('Error in fetcher:', err.message);
    throw err; // Optional: or return { error: err.message }
  }
}
