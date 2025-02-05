// app/layout.tsx
import './globals.css';
import { SolanaWalletProvider } from '../components/WalletProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Easy Coin',
  description: 'Create and manage your Solana tokens with integrated Raydium LP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body data-theme="easycoin">
    <SolanaWalletProvider>
      {children}
    </SolanaWalletProvider>
    </body>
    </html>
  );
}