import { useState } from 'react';

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Harvey',
    age: 36,
    email: 'harvey@suits.com',
  });
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};
