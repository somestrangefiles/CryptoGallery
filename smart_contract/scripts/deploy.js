const main = async () => {
  const CryptoGallery = await hre.ethers.getContractFactory("CryptoGallery");
  const cryptoGallery = await CryptoGallery.deploy();

  await cryptoGallery.deployed();

  console.log("CryptoGallery deployed to: " + cryptoGallery.address);

}


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch (error) {
    console.error(error);
    process.exit(1);

  }

}

runMain();