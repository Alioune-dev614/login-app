import {Link} from 'react-router-dom';
import './Signup.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://login-app-dz49.onrender.com',{name, email, password})
        .then(
            result => {
                console.log(result)
                navigate('/login');
            }
        )
        .catch(err => console.error(err));  
        
    }

    return(
        <>
            <div className="container">
                <h2>Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" required 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <p>Have already an account</p>
                    <Link to="/login" className="btn btn-secondary">Login</Link>
                </form>
            </div>  
        </>
    );
}

export default Signup;