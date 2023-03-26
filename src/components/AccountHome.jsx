import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountPage() {
    const [userName, setUserName] = useState('');
    const [imageSrc, setImageSrc] = useState('');
  //const [email, setEmail] = useState('');
  useEffect(() => {
      axios.get('/cards')
      .then(response => {
          const imagePath = response.data.imagePath;
          const url = '/images/${imagePath}';
          setImageSrc(url);
      })
      .catch(error => {
          console.log(error);
      });
  }, [userName]);

  useEffect(() => {
    axios.get('/login')
      .then(response => {
        setUserName(response.data.userName);
        
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
        <img src = {imageSrc} alt = "Card Collection" width="200" height ="200"/>
        </div>
        </div>
    </>
  );
}

export default AccountPage;

