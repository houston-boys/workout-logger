import '@/styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import UserInfo from '@/components/UserInfo';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <UserInfo />
      <Component {...pageProps} />
    </UserProvider>
  );
}
