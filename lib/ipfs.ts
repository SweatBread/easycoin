// lib/ipfs.ts
import { NFTStorage, File } from 'nft.storage';

const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_TOKEN as string;

export async function uploadImageToIPFS(file: File): Promise<string> {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const metadata = await client.store({
    name: file.name,
    description: 'Token image',
    image: file,
  });
  return metadata.data.image.href; // or metadata.url, depending on your needs
}