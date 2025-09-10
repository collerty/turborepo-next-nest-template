'use server';

import { ApiResponse } from '@/lib/actions/(shared)/api-response';
import { fetcher } from '@/lib/actions/(shared)/fetcher';
import { clearAuthTokens, getAuthTokens } from '@/lib/actions/(shared)/auth-tokens';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { Tokens, User } from '@workspace/zod-schemas';
import { handleError } from '@/lib/actions/(shared)/handle-error';

interface LoginBody {
  email: string;
  password: string;
}


// login with credentials; not used in social login
export async function login(body: LoginBody): Promise<ApiResponse<Tokens>> {
  try {
    const data = await fetcher(`${getApiUrl()}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }) as any; // TODO: make a type here

    if (data.accessToken && data.refreshToken) {
      // await setAuthTokens(data.accessToken, data.refreshToken);
    }


    return { success: true, data: data };
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    return { success: false, error: error };
  }
}


export async function getProfile(): Promise<User | null> {
  try {
    const user = await fetcher(`${getApiUrl()}/auth/profile`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store',
    }) as User;

    return user;
  } catch (e: unknown) {
    handleError(e);
    return null;
  }
}

export async function logout(): Promise<void> {
  // let redirectPath: string | null = null;

  try {
    await clearAuthTokens();
    // console.log('revalidate path');
    // window.location.href = '/';
    // revalidatePath('/', 'layout');
  } catch (e) {
    console.log(e);
  } finally {
    // redirect("/");
  }
}