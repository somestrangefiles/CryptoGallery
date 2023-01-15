import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';


export const CryptoGalleryContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const cryptoGalleryContract = new ethers.Contract(contractAddress, contractABI, signer);

    return cryptoGalleryContract;
}


export const CryptoGalleryProvider = ({ children }) => {


    const ownerAccount = "0x4dB1cB135c03B5C35d3112BaAcF97005B34B88d9";

    const [currentAccount, setCurrentAccount] = useState("");
    const [isOwnerAccount, setisOwnerAccount] = useState(false);
    const [formData, setFormData] = useState({amount: ''});

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value}));
    }
    


    const checkIfWalletIsConnected = async () => {
        if(!ethereum) {
            return alert("Пожалуйста, установите MetaMask");
        }

        const accounts = await ethereum.request({method: "eth_accounts"});

        if (accounts.length) {
            setCurrentAccount(accounts[0]);
        }

        if (accounts[0].toLowerCase() === ownerAccount.toLowerCase()) {
            setisOwnerAccount(true);
        }
        console.log(accounts);
    }


    const connectWallet = async () => {
        if(!ethereum) {
            return alert("Пожалуйста, установите MetaMask");
        }

        const accounts = await ethereum.request({method: "eth_requestAccounts"});

        setCurrentAccount(accounts[0]);

    }

    const showDonationsToConsole = async () => {
        if(!ethereum) {
            return alert("Пожалуйста, установите MetaMask");
        }

        const cryptoGalleryContract = getEthereumContract();

        console.log(cryptoGalleryContract.getAllDonations());
    }


    const sendDonation = async () => {
        if(!ethereum) {
            return alert("Пожалуйста, установите MetaMask");
        }

        const { amount } = formData;
        const cryptoGalleryContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);


        await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: currentAccount,
                to: ownerAccount,
                gas: "0x5208",
                value: parsedAmount._hex
            }]
        });

        await cryptoGalleryContract.addDonationToBlockchain(parsedAmount);



        alert("Пожертвование " + amount + " ETH успешно совершено.\nСпасибо за поддержку!");


    }





    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);




    return (
        <CryptoGalleryContext.Provider value={{ connectWallet, currentAccount, isOwnerAccount, formData, setFormData, handleChange, sendDonation, showDonationsToConsole}}>
            { children }
        </CryptoGalleryContext.Provider>
    )
}