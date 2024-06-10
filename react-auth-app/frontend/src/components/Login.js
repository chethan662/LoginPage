import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/login', { email, password });
            setUser(res.data.name);
            localStorage.setItem('token', res.data.token);
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    );
};

export default Login;
