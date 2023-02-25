import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserInfo() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
      </div>
    )
  );
}
