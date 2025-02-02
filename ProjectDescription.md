# Description

## **Solana Token Creation Dashboard with Raydium LP Integration**

### **Tech Stack Requirements:**

1. Next.js 14 (App Router) with TypeScript
2. Tailwind CSS + daisy ui for modern components
3. Solana Web3.js (@solana/web3.js)
4. SPL Token Library (@solana/spl-token)
5. Wallet Adapter (Phantom/Backpack integration)
6. Raydium SDK/API integration
7. IPFS Storage (NFT.Storage or Pinata)
8. Zod for form validation

### **Core Features:**

- **Token Creation Interface**
    - Form fields with validation:
        - Token Name (required, 3-32 chars)
        - Ticker (required, 3-5 uppercase chars)
        - Description (markdown supported)
        - Image Upload (IPFS storage, max 2MB PNG)
        - Social Links (URL validation):
            - Telegram
            - Website
            - Twitter/X
    - Preview panel showing token metadata
    - Solana wallet integration for transaction signing
- **Token Management Dashboard**
    - Recent created tokens list
    - Copy token address button
    - Verification status indicator
    - Social share buttons
- **Raydium Liquidity Pool Initialization**
    - Token address input validation
    - SOL/Token amount inputs
    - Price calculator
    - Transaction wizard:
        1. Approve token transfer
        2. Create pool
        3. Add liquidity
        4. Confirm Raydium transaction
- **Security Considerations**
    - Store private keys in environment variables
    - Implement CSP headers for Web3 security
    - Use Next.js middleware for rate limiting
    - Add transaction confirmation dialogs
    - Implement error boundaries for failed transactions

### **Deployment Checklist:**

1. Set up Solana RPC endpoint (Mainnet/Devnet)
2. Configure IPFS storage credentials
3. Add Raydium API keys (if required)
4. Set CORS policies for Web3 interactions
5. Configure wallet domain verification

### **Testing Guide:**

1. Devnet testing with SOL airdrops
2. Test token creation flow with dummy data
3. Verify metadata on Solscan
4. Test LP creation with minimal amounts
5. End-to-end testing with Playwright

### **Advanced Features (Optional):**

- Token analytics dashboard
- Automated market making strategies
- Token vesting schedules
- Cross-chain bridging integration
- Anti-bot protection measures

### **Legal Considerations:**

- Add financial disclaimer
- Implement KYC/AML checks for large transactions
- Include risk disclosure statements
- Add terms of service agreement