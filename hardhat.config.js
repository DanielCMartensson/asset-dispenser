require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "polygon_mumbai",
  networks: {
    polygon_mumbai: {
      url: process.env.ALCHEMY_TESTNET_RPC_URL,
      accounts: [process.env.TESTNET_PRIVATEKEY],
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
