import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Register = ({ profile, setProfile }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [messages, setMessages] = useState([]);

    const register = async() => {
        console.log(name);
        let results = await axios.post(`/api/users/register`, {
                                                                name: name,
                                                                email: email,
                                                                password: password,
                                                                password2: password2
                                                            })

        console.log(results.data)

        if (results.data[0].message) {
            console.log('whistle')
            setMessages(results.data);
            navigate('/Register')
        } else {
            console.log('yoyo')
            navigate('/Login');
        }                                                        
    }

    return (
        <>
            <div>
            <label htmlFor="name">username</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="username" id="name" name="name" />
                <br></br>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br></br>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <label htmlFor="password2">re-enter password</label>
                <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
                <br></br>
                <button onClick={register}>Register</button>    
                <Link to="/Login">
            <       button>Registered already? Log in.</button>
                </Link>    
            </div>
            <div>{messages.map((message, index) => (
                <div key={index}>{message.message}</div>
            ))}
            </div>
        </>
    )
}

export default Register;