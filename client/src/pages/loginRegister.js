import React, {useState, useEffect} from "react";
import Login from "../components/Login.js";
import Register from "../components/Register.js";
import Navbar from "./NavBar.js";
import Profile from "../components/Profile.js";

const LoginRegister = ({isLoggedIn, setIsLoggedIn}) => {

    const [currentForm, setCurrentForm] = useState('login');

    return (
        <>
          <Navbar />
          loginregister
          { isLoggedIn ? <Profile /> : <Login /> }
        </>
    )
}

export default LoginRegister;