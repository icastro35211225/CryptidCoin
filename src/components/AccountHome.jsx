import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountPage() {
    const [userName, setUserName] = useState('');
  //const [email, setEmail] = useState('');

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
    <div>
      <h2>Welcome to your account, {userName}!</h2>
    </div>
  );
}

export default AccountPage;

