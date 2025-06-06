import './Signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //axios.post('http://localhost:3001/login',{email, password})
        axios.post('https://login-app-dz49.onrender.com/login',{email, password})
        .then(result => {
            console.log(result)
            if(result.data.message === 'Login successful'){
                alert('Login successful');
                navigate('/home');
            }else{
                alert('Login failed: ' + result.data.message);
            }
            

        })
        
    }
    return(
        <>
            <div className="container">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required 
                            onChange={((e) => setEmail(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required 
                            onChange={((e)=> setPassword(e.target.value))}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Connect</button>
                    <p>Do not Have account</p>
                    <Link to="/" className="btn btn-secondary">Signup</Link>
                </form>
            </div>  
        </>
    );
}

export default Login;