'use server';

import { cookies } from 'next/headers';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import setCookieParser from 'set-cookie-parser';


// TODO: remove console.log(s)
export async function getAuthTokens() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  return { accessToken, refreshToken };
}

export async function handleTokenRefresh() {
  try {
    const { refreshToken } = await getAuthTokens();
    if (!refreshToken) throw new Error('No refresh token available');
    console.log('handle token refresh', refreshToken);
    console.log(`${getApiUrl()}/auth/refresh`, { refreshToken: refreshToken?.value });
    const res = await fetch(`${getApiUrl()}/auth/refresh`, {
      method: 'POST',
      headers: {
        Cookie: `refreshToken=${refreshToken.value}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',

    });
    console.log('res after refresh token', res);

    if (!res.ok || res.headers.getSetCookie().length === 0) {
      console.log('failed to refresh token');
      throw new Error(`failed to refresh token: ${refreshToken.value}`);
    }

    await setCookiesFromSetCookieHeaders(res.headers.getSetCookie());

    return new Response('Token refreshed', {
      status: 200,
    });
  } catch (error) {
    console.error('Error refreshing token');
    await clearAuthTokens();
    throw new Error(`Token refresh failed: ${(error as Error).message || error}`);
  }
}


export async function setCookiesFromSetCookieHeaders(setCookies: string[]) {

  const parsedCookies = setCookieParser(setCookies, { map: true });

  const cookieStore = await cookies();
  for (const [name, { value, ...options }] of Object.entries(parsedCookies)) {
    cookieStore.set(name, value, {

      httpOnly: options.httpOnly,
      secure: options.secure,
      path: options.path,
      expires: options.expires,
      sameSite: options.sameSite as 'lax' | 'strict' | 'none' | undefined,
    });
  }

  return { success: true };
}

export async function clearAuthTokens() {
  const cookieStore = await cookies();

  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
}

// only for testing purpose TODO: Remove when playground is removed
export async function clearAccessToken() {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
}
