import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './allCryp'
import { UseUser } from '../context/userContext';

function AccountPage() {
    const [userName, setUserName] = useState('');
    //const [imageSrc, setImageSrc] = useState('');
  //const [email, setEmail] = useState('');

    
  useEffect(() => {
    axios.get('/context/userContext')
      .then(response => {
        UseUser(response.data.userName);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
      <>
    <div>
      <h2>Welcome to your account, {userName}!</h2>
        </div>
        <div>
        <h2>Here are your cards: </h2>
        <div className = "cardContainer">
        
        </div>
        </div>
    </>
  );
}

export default AccountPage;

