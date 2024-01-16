const hre = require("hardhat");

async function main() {
  const AssetDispenserNftsPrivateCollection = await hre.ethers.getContractFactory("AssetDispenserNftsPrivateCollection");
  const assetDispenserNftsPrivateCollection = await AssetDispenserNftsPrivateCollection.deploy("0x64686b3BaCd681225d2b7B777C2f1fcdD2CC698C");

  await assetDispenserNftsPrivateCollection.waitForDeployment();

  console.log("Contract has been deployed to: ", AssetDispenserNftsPrivateCollection.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
