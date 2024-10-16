import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";

const dotenv = require("dotenv");
dotenv.config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

const config = {
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
  },
  mocha: {
    timeout: 600000,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      accounts: [DEPLOYER_PRIVATE_KEY as string],
      url: "https://mainnet.infura.io/v3/" + INFURA_API_KEY,
      chainId: 1,
      gasPrice: 15000000000
    },
    sepolia: {
      accounts: [DEPLOYER_PRIVATE_KEY as string],
      url: 'https://sepolia.infura.io/v3/' + INFURA_API_KEY,
      chainId: 11155111
    },
  },
  typechain: {
    outDir: "./types",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
};

export default config;
