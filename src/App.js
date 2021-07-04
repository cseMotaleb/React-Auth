// import { breakList } from 'prelude-ls';
import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './fire';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const handelLogin = () => {
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        {
          switch (err.code) {
            case "auth/invalid.email":
            case "auth/user-disabled":
              setemailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }

        }

      });
  }
  const handelSignUp = () => {
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }

      });
  };

  const handelLogout = () => {
    fire.auth().signOut();
  }


  function App() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }

  export default App;
