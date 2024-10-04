
const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const config = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  sourcify: {
    enabled: true
  }
};

module.exports = config;                                  
//crowdfunding contract deployed to: 0x64C68A81BD4F09d317d16a013EecBB1C15913268