require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: process.env.ALCHEMY_TESTNET_RPC_URL,
      accounts: [`0x${process.env.TESTNET_PRIVATEKEY}`],
    },
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
  },
};
