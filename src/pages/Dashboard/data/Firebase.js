import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';

const Firebase = () => {
  const [user, setUser] = useState();

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(`User UID: ${currentUser.uid}`);
        console.log(`User Email: ${currentUser.email}`);
        // You can add more fields from the user object as needed
      } else {
        setUser(null);
        console.log('No user is logged in');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <p>This is the Firebase Page.</p>
      {user ? (
        <div>
          <p>Logged in as: {user.email}</p>
          <p>User UID: {user.uid}</p>
          {/* Add more user information here as needed */}
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default Firebase;
