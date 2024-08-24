// AvatarPlaceholder.js
import React from 'react';
import { useAuth } from '../AuthContext';

const AvatarPlaceholder = () => {	
	const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedName = storedUser?.name;
  return (
    /* <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
      <img
        src="../home/Projet/SIAD-master/src/Components/avatar.png" // Placeholder URL, replace it with the actual avatar URL
        alt="Avatar"
        className="w-full h-full object-cover"
      />
      
    </div>*/
    <div>
      {storedUser ? (
        <p>Welcome, {storedName}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default AvatarPlaceholder;
