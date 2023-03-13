import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";

const AddBusiness = ({ profile }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const createBusiness = async() => {
        let results = await axios.post(`/api/businesses`, { name: name,
                                                            description: description,
                                                            address: address
                                                        })
        console.log(results.data)
        
    }

    return (

        <div>
            <Navbar />
            <label>
                Enter Business Name: <input value={name} onChange={(e) => setName(e.target.value)}
                        type="name" placeholder="Your Business Name Here" id="name" name="name" />
            </label>
            <label>
                Enter Business Description: <input value={description} onChange={(e) => setDescription(e.target.value)}
                        type="description" placeholder="Your Business Description Goes Here" id="description" name="description" />
            </label>
            <label>
                Enter Business Address: <input value={address} onChange={(e) => setAddress(e.target.value)}
                        type="address" placeholder="Your Business Address Here" id="address" name="address" />
            </label>
            <button onClick={createBusiness}>Create Your Page</button>
        </div>
    )
}

export default AddBusiness;