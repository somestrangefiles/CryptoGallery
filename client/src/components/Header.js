import React, { useContext } from "react";
import { CryptoGalleryContext } from "../context/CryptoGalleryContext";

const Header = () => {

    const { connectWallet, currentAccount, isOwnerAccount, showDonationsToConsole } = useContext(CryptoGalleryContext);
    

    return (
        <div className="header">
            <ul>
            <li className="title">CryptoGallery</li>
            <li className="walletAddress">
                {isOwnerAccount && (<div>Владелец: </div>)}
                {currentAccount && (<div>{currentAccount}</div>)}
                {!currentAccount && (<button className='connectWallet' onClick={connectWallet}>Подключить кошелек</button>)}
                
            </li>
            </ul>
            {isOwnerAccount && (<button className="showDonationsToConsole" onClick={showDonationsToConsole}>Показать пожертвовования</button>) }
        </div>
    )   
}

export default Header;