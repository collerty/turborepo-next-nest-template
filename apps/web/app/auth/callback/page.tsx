'use client';

import { useEffect } from 'react';

export default function AuthCallbackPage() {
  useEffect(() => {
    // Notify parent window
    if (window.opener) {
      window.opener.postMessage('auth-success', window.location.origin);
    }

    // Close the popup
    window.close();
  }, []);

  return (
    <div>
      <p>Authentication successful! You can close this window.</p>
    </div>
  );
}
