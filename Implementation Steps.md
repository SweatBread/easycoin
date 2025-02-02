# Implementation Steps

1. **Project Setup**
    
    ```bash
    npx create-next-app@latest --typescript nome-app
    npm install @solana/web3.js @solana/spl-token @phantom/brn @raydium-io/raydium-sdk zod @hookform/resolvers @radix-ui/react-dialog nft.storage
    ```
    
2. **Solana Token Service (utils/solana.ts)**
    
    ```tsx
    import { Connection, Keypair, PublicKey } from "@solana/web3.js";
    import { createMint } from "@solana/spl-token";
    
    export const createNewToken = async (
      connection: Connection,
      payer: Keypair,
      metadata: {
        name: string;
        symbol: string;
        uri: string; // IPFS metadata URL
      }
    ) => {
      const mint = await createMint(
        connection,
        payer,
        payer.publicKey,
        null,
        9 // Decimals
      );
    
      // Add metadata initialization logic
      return mint.toString();
    };
    ```
    
3. **IPFS Image Upload (app/api/ipfs/route.ts)**
    
    ```tsx
    import { NFTStorage } from 'nft.storage';
    
    export async function POST(req: Request) {
      const formData = await req.formData();
      const image = formData.get('image') as File;
      
      const client = new NFTStorage({ token: process.env.NFT_STORAGE_KEY! });
      const cid = await client.storeBlob(image);
      
      return Response.json({ cid: cid });
    }
    ```
    
4. **Raydium LP Integration Component**
    
    ```tsx
    import { initPool } from '@raydium-io/raydium-sdk';
    
    export const LiquidityWizard = ({ tokenAddress }: { tokenAddress: string }) => {
      const initializePool = async (solAmount: number, tokenAmount: number) => {
        // Raydium pool initialization logic
        const { txId } = await initPool({
          baseToken: new PublicKey(tokenAddress),
          quoteToken: NATIVE_MINT,
          baseAmount: tokenAmount,
          quoteAmount: solAmount,
        });
        
        return txId;
      };
    
      return (
        // UI components for LP creation
      );
    };
    ```
    
5. **General coding instructions and rules**
    
    Write readable code, that is both easy to understand and to maintain. Code should be frammented in more files and components to increase the readability.