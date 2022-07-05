const hre = require("hardhat");

async function main() {
  const GoldenFoxNFT = await hre.ethers.getContractFactory("GoldenFoxNFT");
  const goldenFoxNFT = await GoldenFoxNFT.deploy();

  await goldenFoxNFT.deployed();

  console.log("GoldenFoxNFT deployed to:", goldenFoxNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
