'use client';

import { useRouter, usePathname } from 'next/navigation';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="navbar bg-base-100 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li><a 
              className={isActive('/') ? 'active' : ''} 
              onClick={() => router.push('/')}
            >Home</a></li>
            <li><a 
              className={isActive('/token-creation') ? 'active' : ''} 
              onClick={() => router.push('/token-creation')}
            >Create Token</a></li>
            <li><a 
              className={isActive('/raydium-lp') ? 'active' : ''} 
              onClick={() => router.push('/raydium-lp')}
            >Setup Liquidity</a></li>
          </ul>
        </div>
        <a 
          className="btn btn-ghost text-xl" 
          onClick={() => router.push('/')}
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            Easy Coin
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a 
            className={isActive('/') ? 'active' : ''} 
            onClick={() => router.push('/')}
          >Home</a></li>
          <li><a 
            className={isActive('/token-creation') ? 'active' : ''} 
            onClick={() => router.push('/token-creation')}
          >Create Token</a></li>
          <li><a 
            className={isActive('/raydium-lp') ? 'active' : ''} 
            onClick={() => router.push('/raydium-lp')}
          >Setup Liquidity</a></li>
          <li><a 
            className={isActive('/raydium-lp') ? 'active' : ''} 
            onClick={() => router.push('/raydium-lp')}
          >Copy Trending Tokens</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <WalletMultiButton className="btn btn-primary" />
      </div>
    </div>
  );
}