const hre = require("hardhat");

async function main() {
  const AssetDispenserNfts = await hre.ethers.getContractFactory("AssetDispenserNfts");
  const assetDispenserNfts = await AssetDispenserNfts.deploy("0x64686b3BaCd681225d2b7B777C2f1fcdD2CC698C");

  await assetDispenserNfts.waitForDeployment();

  console.log("Contract has been deployed to: ", assetDispenserNfts.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
