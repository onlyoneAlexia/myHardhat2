const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

async function main(){ 
  const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await crowdfunding.deploy();
  await crowdfunding.waitForDeployment();

  console.log("Crowdfunding contract deployed to:", crowdfunding.target);
};



  main()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
