const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

async function main(){ 
  const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();
  await crowdfunding.waitForDeployment();
};



  main()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
