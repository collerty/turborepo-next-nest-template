'use client';

import { Tokens } from '@workspace/zod-schemas';
import { Button } from '@workspace/ui/components/button';
import { toast } from 'sonner';
import { clearAuthTokens } from '@/lib/actions/(shared)/auth-tokens';

export function GetTokensButton({ getTokens }: { getTokens: () => any }) {
  return (
    <div className="">
      <Button onClick={async () => {
        const tokens = await getTokens();
        toast('AuthTokens:', {
          closeButton: true,
          description: (
            <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(tokens, null, 2)}</code>
        </pre>
          ),
        });
      }}>
        Get tokens
      </Button>
    </div>
  );
}

export function ClearAuthTokensButton({ clearAuthTokens }: { clearAuthTokens: any }) {
  return (
    <div className="">
      <Button variant="destructive" onClick={async () => {
        await clearAuthTokens();
        toast('AuthTokens were cleared', { closeButton: true });
      }}>
        Clear Refresh and Access Tokens
      </Button>
    </div>
  );
}

export function ClearAccessTokenButton({ clearAccessToken }: { clearAccessToken: any }) {
  return (
    <div className="">
      <Button variant="destructive" onClick={async () => {
        await clearAccessToken();
        toast('accessToken was cleared', { closeButton: true });
      }}>
        Clear Access Token
      </Button>
    </div>
  );
}


export function RefreshTokensButton({ refreshTokens }: { refreshTokens: any }) {
  return (
    <div className="">
      <Button onClick={async () => {
        await refreshTokens();
        // const res = await fetch('http://localhost:4000/auth/refresh', { method: 'POST', credentials: 'include' });
        // console.log(res)
        toast('tokens were refreshed', { closeButton: true });
      }}>
        Refresh Tokens
      </Button>
    </div>
  );
}

export function GetProfileButton({ getProfile }: { getProfile: any }) {
  return (
    <div className="">
      <Button onClick={async () => {
        const profile = await getProfile();
        toast('AuthTokens:', {
          closeButton: true,
          description: (
            <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4 overflow-auto">
          <code className="text-white">{JSON.stringify(profile, null, 2)}</code>
        </pre>
          ),
        });
      }}>
        Get Me
      </Button>
    </div>
  );
}