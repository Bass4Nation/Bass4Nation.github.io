// import React, { useState } from 'react';

import { useEffect, useState } from "react";
import animation from "../styles/Animation.module.css";
import styles from "../styles/LoginForm.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

interface TestUser {
  email: string;
  password: string;
}

const testUser: TestUser = {
  email: "test@test",
  password: "test",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

//  
  const router = useRouter(); // router.push('/')

  const logInSuccess = () => {
    console.log("Login success");
    return setLoggedIn(true);
  };

  const logInFailure = () => {
    console.log("Login failure");
  };

  const checkingLogin = () => {
    // Force test user for right now
    setEmail(testUser.email);
    setPassword(testUser.password);

    if (email === testUser.email && password === testUser.password) {
      logInSuccess();
    } else {
      logInFailure();
    }
  };

  //   Faking a slow network request
  const sleep = (s: number) => {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);

    // Simulate a slow network
    sleep(3).then(() => {
        // All this happens after 3 seconds of fake loading
      console.log("Email:", email, "Password:", password);
      // Handle form submission logic here
      checkingLogin();
      setLoading(false);
    });
  };

  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in");
        router.push('/dashboard/123');
    }
  }, [loggedIn, router]);

  const inputOrLoading = () => {
    if (loading) {
        return <div className={animation.spinner}></div>;
    } else {
        return (
            <form onSubmit={handleSubmit} className={styles.inputForm}>
            <label htmlFor="email" className={styles.emailLabel}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
            />
            <label htmlFor="password" className={styles.passwordLabel}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.passwordInput}
            />
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
            <button className={styles.registerButton}>Register new user</button>
          </form>
        )};} 


  return (
    <div className={styles.center}>
      <h1 className={styles.loginTitle}>Login</h1>
        {inputOrLoading()}
    </div>
  );
};

export default LoginForm;
