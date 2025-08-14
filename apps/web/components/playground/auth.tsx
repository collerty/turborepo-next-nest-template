'use client';

import { Tokens } from '@workspace/zod-schemas';
import { Button } from '@workspace/ui/components/button';

export function GetTokensButton({ getTokens }) {
  return (
    <div className="">
      <Button onClick={async () =>  {
        const tokens = await getTokens();
        console.log(tokens)
      }}>
        Get tokens
      </Button>

    </div>
  );
}