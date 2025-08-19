'use client';

import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { clearAuthTokens, getAuthTokens, setAuthTokens } from '@/lib/actions/(shared)/auth-tokens';

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

    if (!res.ok) {
      console.log('failed to refresh token');
      throw new Error(`failed to refresh token: ${refreshToken.value}`);
    }
    const { accessToken, refreshToken: newRefreshToken } = await res.json();
    console.log('new refreshToken', newRefreshToken);

    await setAuthTokens(accessToken, newRefreshToken);

    return new Response('Token refreshed', {
      status: 200,
    });
  } catch (error) {
    console.error('Error refreshing token');
    await clearAuthTokens();
    throw new Error(`Token refresh failed: ${(error as Error).message || error}`);
  }
}
