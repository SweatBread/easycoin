// components/TokenForm.tsx
'use client';

import { useState } from 'react';
import { z } from 'zod';
import FormInput from './FormComponents/FormInput';
import FormTextarea from './FormComponents/FormTextarea';
import FormFileInput from './FormComponents/FormFileInput';
import SocialLinksGroup from './FormComponents/SocialLinkGroup';
import RevokeCheckbox from './FormComponents/RevokeCheckbox';

const tokenSchema = z.object({
  tokenName: z.string().min(3, 'Token Name must be at least 3 characters').max(32, 'Token Name cannot exceed 32 characters'),
  ticker: z
    .string()
    .regex(/^[A-Z]{3,5}$/, 'Ticker must be 3-5 uppercase letters'),
  description: z.string().optional(),
  telegram: z.string().url('Invalid URL').optional(),
  website: z.string().url('Invalid URL').optional(),
  twitter: z.string().url('Invalid URL').optional(),
  revokeMint: z.boolean(),
  revokeFreeze: z.boolean(),
  revokeUpdate: z.boolean()
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
    revokeMint: true,
    revokeFreeze: true,
    revokeUpdate: true
  });
  const [errors, setErrors] = useState<Partial<Record<keyof TokenFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      tokenSchema.parse(formData);
      setErrors({});
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

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto space-y-6">
      <FormInput
        name="tokenName"
        label="Token Name"
        value={formData.tokenName}
        onChange={handleChange}
        error={errors.tokenName}
        placeholder="My Token"
      />

      <FormInput
        name="ticker"
        label="Ticker"
        value={formData.ticker}
        onChange={handleChange}
        error={errors.ticker}
        placeholder="MTK"
      />

      <FormTextarea
        name="description"
        label="Description (Markdown supported)"
        value={formData.description}
        onChange={handleChange}
        placeholder="Describe your token..."
      />

      <FormFileInput
        name="image"
        label="Image Upload (PNG, max 2MB)"
        onChange={handleImageUpload}
        error={errors.image}
      />

      <SocialLinksGroup
        links={[
          { name: 'telegram', label: 'Telegram', placeholder: 'https://t.me/yourchannel' },
          { name: 'website', label: 'Website', placeholder: 'https://yourwebsite.com' },
          { name: 'twitter', label: 'Twitter/X', placeholder: 'https://twitter.com/yourhandle' }
        ]}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RevokeCheckbox
          name="revokeMint"
          label="Revoke Mint"
          description="Mint Authority allows you to mint more supply of your token."
          checked={formData.revokeMint}
          onChange={handleChange}
        />
        <RevokeCheckbox
          name="revokeFreeze"
          label="Revoke Freeze"
          description="Freeze Authority allows you to freeze token accounts of holders."
          checked={formData.revokeFreeze}
          onChange={handleChange}
        />
        <RevokeCheckbox
          name="revokeUpdate"
          label="Revoke Update"
          description="Update Authority allows you to update the token metadata about your token."
          checked={formData.revokeUpdate}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Create Token
      </button>
    </form>
  );
}