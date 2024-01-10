const hre = require("hardhat");
initialOwner = "0x64686b3BaCd681225d2b7B777C2f1fcdD2CC698C"

async function main() {
  const GameNft = await hre.ethers.getContractFactory("GameNft");
  const gameNft = await GameNft.deploy(initialOwner);

  await gameNft.waitForDeployment();

  console.log("GameNft Contract has been deployed to: ", gameNft.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
