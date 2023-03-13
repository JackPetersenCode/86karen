import React, { useEffect, useState } from "react";
import Navbar from "../pages/NavBar";

const Profile = ({isLoggedIn, setIsLoggedIn}) => {

    return (
        <div>
            <Navbar />
            This is the profile page
        </div>
    )
}

export default Profile;