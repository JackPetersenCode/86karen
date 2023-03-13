import React, {useState, useEffect} from "react";
import axios from "axios";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ profile, setProfile }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);

    const login = async() => {
        let results = await axios.post(`/api/users/login`, {
                                                                email: email,
                                                                password: password,
                                                            })

        console.log(results)
        if (!results.data.id) {
            console.log('login failure')
            setMessages(results.data)
            navigate('/Login');
        } else {
            console.log('yayaya');
            //setLoginStatus(true);
            setProfile(results.data.name)
            navigate('/');
        }                                                        
    }

    return (
        <>
        <div>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br></br>
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <br></br>

            <button onClick={login}>Log in</button>        
        </div>
        <Link to="/Register">
            <button>Don't have an account? Register here.</button>
        </Link>
        <div>{messages.map((message, index) => (
                <div key={index}>{message.message}</div>
            ))}
        </div>
        </>
    )
}

export default Login;