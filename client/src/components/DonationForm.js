import React, { useContext } from 'react';
import { CryptoGalleryContext } from '../context/CryptoGalleryContext';


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step='0.0001'
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
  );


const DonationForm = ({ selectedImg, setSelectedImg }) => {

    const { formData, handleChange, sendDonation } = useContext(CryptoGalleryContext);

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
        
    }

    const handleSubmit = (e) => {
        const { amount } = formData;
        e.preventDefault();

        if (!amount) {
            return;
        }

        sendDonation();
        setSelectedImg(null);

    }

    return (
        <div className='backdrop' onClick={handleClick}>
            <div className='donation'>
                <form>
                    <h2>Понравилась фотография?</h2>
                    <h2>При желании можете пожертвовать автору Ethereum</h2>
                    <img src={selectedImg} />
                    
                    <Input type='text' placeholder='Количество (ETH)' name='amount' handleChange={handleChange} /><br />
                    <button className='donate' type='submit' onClick={handleSubmit}>ПОЖЕРТВОВАТЬ</button>
                </form>
            </div>
        </div>
    )
}


export default DonationForm;