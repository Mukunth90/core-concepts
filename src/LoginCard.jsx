import { useState } from 'react';

export const LoginCard = () => {
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  const [message, SetMessage] = useState('');

  const handleLogin = () => {
    SetisLoggedIn(!isLoggedIn);
  };

  const handleMessage = (event) => {
    SetMessage(event.target.value);
  };

  return (
    <>
      <button onClick={handleLogin}> {isLoggedIn ? 'Logout' : 'LogIn'} </button>
      <div>
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={handleMessage}
        />
        <p>{message}</p>
      </div>
    </>
  );
};
