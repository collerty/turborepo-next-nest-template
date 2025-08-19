import { Button } from '@workspace/ui/components/button';
import { ClearAccessTokenButton, GetTokensButton, RefreshTokensButton } from '@/components/playground/auth';
import {
  clearAccessToken, getAuthTokens,
  handleTokenRefresh,
} from '@/lib/actions/(shared)/auth-tokens';

export default function AuthPlaygroundPage() {
  return (
    // TODO: make height responsive to header ( calc )
    <div className="flex flex-col justify-center items-center gap-4 w-full min-h-svh">
      <GetTokensButton getTokens={getAuthTokens} />
      <ClearAccessTokenButton clearAccessToken={clearAccessToken} />
      <RefreshTokensButton refreshTokens={handleTokenRefresh} />
    </div>
  );
}