import './App.css';
import Header from './components/Header';
import UploadForm  from './components/UploadForm';
import Images  from './components/Images';
import DonationForm from './components/DonationForm';
import { useState } from 'react';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
      <Header />
      <UploadForm />
      <Images setSelectedImg={setSelectedImg} />
      { selectedImg && <DonationForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
