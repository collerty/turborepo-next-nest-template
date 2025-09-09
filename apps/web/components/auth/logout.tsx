'use client';

import { LogOutIcon } from 'lucide-react';
import { logout } from '@/lib/actions/auth.actions';
import { Button } from '@workspace/ui/components/button';

export function LogoutButton() {
  return (
    <Button onClick={logout}>
      <LogOutIcon />
    </Button>
  );
}