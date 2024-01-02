require("@nomicfoundation/hardhat-toolbox");
require('.env').config();

import {config as dotenv} from 'dotenv'

dotenv({path: '../config/config.env'})
const {ALCHEMY_TESTNET_RPC_URL, TESTNET_PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks:{ 
    mumbai: {
      url: ALCHEMY_TESTNET_RPC_URL,
      accounts: [TESTNET_PRIVATE_KEY],
    },
  },    
};
