const hre = require("hardhat");

async function main() {
  const NftMinting = hre.ethers.getContractFactory("NftMinting");
  const nftMinting = NftMinting.deploy("0x64686b3BaCd681225d2b7B777C2f1fcdD2CC698C");

  await nftMinting.deployed();


  console.log("NftMinting Contract has been deployed to: ", NftMinting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
