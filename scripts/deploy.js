const hre = require("hardhat");
const { ethers, upgrades } = hre;

const { saveContract, getContracts, sleep } = require("./utils");

async function main() {
  const network = hre.network.name;

  const contracts = await getContracts(network)[network];

  const USDC = await hre.ethers.getContractFactory("USDC");
  const usdc = await USDC.deploy(
    contracts.minter
  );
  await usdc.deployed();
  console.log("usdc address:", usdc.address);
  await saveContract(network, "usdc", usdc.address);
  await sleep(20000);
  await hre.run("verify:verify", {
    address: usdc.address,
    constructorArguments: [
      contracts.minter
    ],
  });
  console.log("Completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
