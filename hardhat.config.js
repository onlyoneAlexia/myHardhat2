const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 
  networks: {


    sepolia: {
      url: 'https://sepolia.infura.io/v3/e9c1880243764d849a4970565ccbf8c7',
      accounts: [process.env.SECRET],
      // gasPrice: 1000000000,
    },
  
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      
    ],
  },
 
  // This is a sample solc configuration that specifies which version of solc to use

};