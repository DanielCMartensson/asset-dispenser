const hre = require("hardhat");

async function main() {
  const NftMinting = hre.ethers.getContractFactory("NftMinting");
  const nftMinting = NftMinting.deploy();
  await nftMinting.deployed();
  console.log("NftMinting Contract has been deployed to: ", NftMinting.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
