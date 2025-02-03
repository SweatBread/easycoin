// components/TokenForm.tsx
'use client';

import { useState } from 'react';
import { z } from 'zod';

const tokenSchema = z.object({
  tokenName: z.string().min(3, 'Token Name must be at least 3 characters').max(32, 'Token Name cannot exceed 32 characters'),
  ticker: z
    .string()
    .regex(/^[A-Z]{3,5}$/, 'Ticker must be 3-5 uppercase letters'),
  description: z.string().optional(),
  telegram: z.string().url('Invalid URL').optional(),
  website: z.string().url('Invalid URL').optional(),
  twitter: z.string().url('Invalid URL').optional(),
  // We'll handle image upload separately.
});

type TokenFormData = z.infer<typeof tokenSchema>;

export default function TokenForm() {
  const [formData, setFormData] = useState<TokenFormData>({
    tokenName: '',
    ticker: '',
    description: '',
    telegram: '',
    website: '',
    twitter: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof TokenFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Validate file size and type here, then call your IPFS helper (see /lib/ipfs.ts)
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: 'Image must be under 2MB' }));
      return;
    }
    if (file.type !== 'image/png') {
      setErrors((prev) => ({ ...prev, image: 'Only PNG images are allowed' }));
      return;
    }
    // Call your IPFS upload function and store the returned URL or CID
    // Example:
    // const imageUrl = await uploadImageToIPFS(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      tokenSchema.parse(formData);
      setErrors({});

      // Integrate with Solana's SPL Token library to create the token.
      // This would involve creating and signing a transaction using your wallet.
      // Example: await createTokenTransaction(formData);

      console.log('Token creation data:', formData);
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: any = {};
        error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
      <div>
        <label className="block">Token Name</label>
        <input
          name="tokenName"
          value={formData.tokenName}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="My Token"
        />
        {errors.tokenName && <p className="text-red-500 text-sm">{errors.tokenName}</p>}
      </div>

      <div>
        <label className="block">Ticker</label>
        <input
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="MTK"
        />
        {errors.ticker && <p className="text-red-500 text-sm">{errors.ticker}</p>}
      </div>

      <div>
        <label className="block">Description (Markdown supported)</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Describe your token..."
        />
      </div>

      <div>
        <label className="block">Image Upload (PNG, max 2MB)</label>
        <input type="file" accept="image/png" onChange={handleImageUpload} className="file-input file-input-bordered w-full" />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block">Telegram</label>
          <input
            name="telegram"
            value={formData.telegram}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://t.me/yourchannel"
          />
          {errors.telegram && <p className="text-red-500 text-sm">{errors.telegram}</p>}
        </div>
        <div>
          <label className="block">Website</label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://yourwebsite.com"
          />
          {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>
        <div>
          <label className="block">Twitter/X</label>
          <input
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://twitter.com/yourhandle"
          />
          {errors.twitter && <p className="text-red-500 text-sm">{errors.twitter}</p>}
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Create Token
      </button>
    </form>
  );
}