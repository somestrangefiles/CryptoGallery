// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract CryptoGallery {
    uint256 donationsCount = 0;

    event Donation(address from, uint amount, uint256 timestamp);

    struct DonationStruct {
        address from;
        uint amount;
        uint256 timestamp;
    }

    DonationStruct[] donations;

    function addDonationToBlockchain(uint amount) public {
        donationsCount += 1;
        donations.push(DonationStruct(msg.sender, amount, block.timestamp));
        emit Donation(msg.sender, amount, block.timestamp);

    }

    function getAllDonations() public view returns (DonationStruct[] memory) {
        return donations;
    }

    function getDonationsCount() public view returns (uint256) {
        return donationsCount;
    }
}