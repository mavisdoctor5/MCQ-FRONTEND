import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    


    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/token/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.access);
            navigate('/questions');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                </form>
                </div>
    );
    
}


export default LoginPage;