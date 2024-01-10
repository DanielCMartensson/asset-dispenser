require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const {ALCHEMY_TESTNET_RPC_URL, TESTNET_PRIVATEKEY, POLYGONSCAN_API_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: ALCHEMY_TESTNET_RPC_URL,
      accounts: [`0x${TESTNET_PRIVATEKEY}`]
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
  },
};
