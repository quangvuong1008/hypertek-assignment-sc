

### Environment Variables

- `DEPLOYER_PRIVATE_KEY`: The private key of the deployer.
- `ETHERSCAN_API_KEY`: The API key for Etherscan.
- `INFURA_API_KEY`: The API key for Infura.


### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>/smart-contract
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   - Copy the `.env_example` file to `.env`:
     ```bash
     cp .env_example .env
     ```
   - Open the `.env` file and fill in the required values:
     - `DEPLOYER_PRIVATE_KEY`: Your Ethereum wallet private key
     - `ETHERSCAN_API_KEY`: Your Etherscan API key
     - `INFURA_API_KEY`: Your Infura API key

4. Compile the smart contracts:
   ```bash
   yarn compile
   ```

Now you're ready to deploy or run tests on the smart contracts.

### Deployment

To deploy the contracts to the Sepolia testnet:

```bash
yarn run deploy:dev_sepolia scripts/deploy.ts
```

### Verification

To verify the contracts on Etherscan:

```bash
yarn run verify:dev_sepolia
```
