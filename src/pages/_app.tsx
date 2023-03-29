import { AppProvider } from '@/data/context/AppContent';
import { AuthProvider } from '@/data/context/AuthContext';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
