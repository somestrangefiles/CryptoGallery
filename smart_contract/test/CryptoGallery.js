const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("CryptoGallery", function () {
  let contract;
  let owner;

  beforeEach(async () => {
    const CryptoGallery = await ethers.getContractFactory("CryptoGallery");
    const cryptoGallery = await CryptoGallery.deploy();
    contract = await cryptoGallery.deployed();

    [owner] = await ethers.getSigners();
  });

  it("", async = () => {
    let donationsCount = contract.getAllDonations().length;
    console.log(donationsCount);
    contract.addDonationToBlockchain("0xe35fa931a00000");
    expect(contract.getAllDonations().length).to.equal(donationsCount + 1);
  });


  
});

