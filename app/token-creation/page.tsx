// app/token-creation/page.tsx
import TokenForm from '@/components/TokenForm';
//import TokenPreview from '@/components/TokenPreview'; // A component you can build to preview metadata

export default function TokenCreationPage() {
  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Create Your Solana Token</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        <div className="flex-1">
          <TokenForm />
        </div>
        <div className="flex-1">
          {/* Live preview of token metadata; update via state management or context */}
          {/*<TokenPreview />*/}
        </div>
      </div>
    </div>
  );
}