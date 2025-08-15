'use client';

import { Tokens } from '@workspace/zod-schemas';
import { Button } from '@workspace/ui/components/button';
import { toast } from 'sonner';

export function GetTokensButton({ getTokens }: { getTokens: () => Tokens }) {
  return (
    <div className="">
      <Button onClick={async () => {
        const tokens = await getTokens();
        toast('AuthTokens:', {
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

export function ClearAccessTokenButton({ clearAccessToken }: { clearAccessToken: any }) {
  return (
    <div className="">
      <Button variant="destructive" onClick={async () => {
        await clearAccessToken();
        toast('AcessToken was cleared');
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
      }}>
        Refresh Tokens
      </Button>
    </div>
  );
}