'use client';

interface questionProps{
  question: string,
  children: string,
  defaultOpen: boolean
}

function Question({ question, children, defaultOpen = false }: questionProps) {
  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" defaultChecked={defaultOpen} />
      <div className="collapse-title text-xl font-medium">
        {question}
      </div>
      <div className="collapse-content">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text pb-1 text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Question question="What is Easy Coin?" defaultOpen>
            Easy Coin is a platform that simplifies the process of creating and launching Solana tokens. We provide an intuitive interface for token creation and automated liquidity pool setup through Raydium.
          </Question>
          <Question question="How much does it cost to create a token?" defaultOpen={false}>
            Creating a token on Solana requires a small amount of SOL for transaction fees. The exact amount varies but is typically less than 0.1 SOL. Additional fees apply when setting up a liquidity pool.
          </Question>
          <Question question="What is a liquidity pool?" defaultOpen={false}>
            A liquidity pool is a trading venue where users can exchange tokens. By setting up a liquidity pool, you're creating a market for your token, allowing others to buy and sell it easily through decentralized exchanges like Raydium.
          </Question>
          <Question question="How do I connect my wallet?" defaultOpen={false}>
            Click the "Select Wallet" button in the top right corner and choose your preferred Solana wallet (e.g., Phantom, Backpack). Make sure you have some SOL in your wallet for transaction fees.
          </Question>
          <Question question="Is my token automatically listed on exchanges?" defaultOpen={false}>
            Creating a liquidity pool on Raydium makes your token tradable on their decentralized exchange. For listings on centralized exchanges, you'll need to apply separately through their respective processes.
          </Question>
        </div>
      </div>
    </div>
  );
}