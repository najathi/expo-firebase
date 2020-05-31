import React, { useState, useEffect } from 'react';
import firebase from './config/firebase';
import Auth from './screens/user/auth';

export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (userInfo) => {
    setUser(userInfo);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Auth
      onAuthState={onAuthStateChanged}
      user={user}
    />
  );
}
