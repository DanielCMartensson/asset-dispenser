/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const {ALCHEMY_TESTNET_RPC_URL, TESTNET_PRIVATEKEY} = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "polygon_mumbai",
  networks: {
    polygon_mumbai: {
      url: ALCHEMY_TESTNET_RPC_URL,
      accounts: [TESTNET_PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
  },
};
