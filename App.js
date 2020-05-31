import React, { useState, useEffect } from 'react';
import firebase from './config/firebase';

// screens
import Auth from './screens/user/auth';
import Person from './screens/person';

export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [navigation, setNavigation] = useState('');

  // Handle user state changes
  const onAuthStateChanged = (userInfo) => {
    setUser(userInfo);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const navigationHandler = screenName => {
    setNavigation(screenName);
  };

  let screen = (
    <Auth
      onAuthState={onAuthStateChanged}
      user={user}
      navigate={navigationHandler}
    />
  );

  if (navigation == 'success' || user) {
    screen = (<Person />);
  }

  return screen;
}
