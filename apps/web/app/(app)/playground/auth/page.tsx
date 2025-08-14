import { Button } from '@workspace/ui/components/button';
import { GetTokensButton } from '@/components/playground/auth';
import { getAuthTokens } from '@/lib/actions/(shared)/auth-tokens';

export default function AuthPlaygroundPage() {
  return (
    <div>
      <GetTokensButton getTokens={getAuthTokens} />
      <GetTokensButton getTokens={getAuthTokens} />
    </div>
  )
}