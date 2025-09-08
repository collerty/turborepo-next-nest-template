import { Button } from '@workspace/ui/components/button';
import {
  ClearAccessTokenButton,
  ClearAuthTokensButton, GetProfileButton,
  GetTokensButton,
  RefreshTokensButton,
} from '@/components/playground/auth';
import {
  clearAccessToken, clearAuthTokens, getAuthTokens,
  handleTokenRefresh,
} from '@/lib/actions/(shared)/auth-tokens';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { getApiUrl } from '@/lib/actions/(shared)/api-url';
import { getProfile } from '@/lib/actions/auth.actions';

export default function AuthPlaygroundPage() {
  return (
    // TODO: make height responsive to header ( calc )
    <div className="flex flex-col justify-center items-center gap-4 w-full min-h-svh">
      <AuthDialog apiUrl={getApiUrl()} />
      <GetProfileButton getProfile={getProfile}/>
      <GetTokensButton getTokens={getAuthTokens} />
      <ClearAccessTokenButton clearAccessToken={clearAccessToken} />
      <ClearAuthTokensButton clearAuthTokens={clearAuthTokens} />
      <RefreshTokensButton refreshTokens={handleTokenRefresh} />
    </div>
  );
}