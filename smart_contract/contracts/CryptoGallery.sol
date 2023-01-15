// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract CryptoGallery {


    event Donation(
        address from,
        uint amount,
        uint256 timestamp
    );

    struct DonationStruct {
        address from;
        uint amount;
        uint256 timestamp;
    }

    DonationStruct[] donations;

    function addDonationToBlockchain(uint amount) public {
        donations.push(DonationStruct(msg.sender, amount, block.timestamp));
        emit Donation(msg.sender, amount, block.timestamp);

    }

    function getAllDonations() public view returns (DonationStruct[] memory) {
        return donations;
    }


}