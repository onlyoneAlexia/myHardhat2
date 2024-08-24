const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

async function main(){ 
  const CalculatorFactory = await ethers.getContractFactory("Calculate");
  const cFactory = await CalculatorFactory.deploy();
  await cFactory.deployed();
};
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}