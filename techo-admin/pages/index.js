import React, { useState, useEffect } from "react";
import Head from "next/head";
import Login from "./Login";
import Home from "./Home";

import { auth } from "../firebase/client";
import "firebase/auth";

export default function index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>TECHO - Admin</title>
      </Head>

      {!user ? (
        <Login />
      ) : (
        <div className="relative min-h-screen flex ">
          <Home />
        </div>
      )}
    </div>
  );
}
