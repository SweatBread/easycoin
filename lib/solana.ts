// lib/solana.ts
import { Connection, Keypair, Transaction, PublicKey } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';

// This function is a simplified example. In production, you would sign transactions using the wallet adapter.
export async function createSolanaToken(
  connection: Connection,
  payer: Keypair, // In production, use the wallet adapter's provider instead of Keypair
  mintAuthority: PublicKey,
  freezeAuthority: PublicKey,
  decimals = 0
) {
  const mint = await createMint(connection, payer, mintAuthority, freezeAuthority, decimals);
  return mint; // Returns the new token mint address
}