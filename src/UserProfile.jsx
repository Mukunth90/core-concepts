import { useState } from 'react';

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Harvey',
    age: 36,
    email: 'harvey@suits.com',
    address: {
      city: 'Gotham City',
      country: 'USA',
    },
  });

  console.log(user);

  const updateName = () => {
    setUser({
      ...user,
      name: 'Harvey Spector',
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  const updateMultiple = () => {
    setUser({
      ...user,
      name: 'Harvey Spector',
      age: 37,
    });
  };

  const updateCity = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: 'Metropolis',
      },
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
      <p>City : {user.address.city}</p>
      <p>Country : {user.address.country}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Increase Age By 1</button>
      <button onClick={updateMultiple}>Multiple Update</button>
      <button onClick={updateCity}>Move City</button>
    </div>
  );
};
