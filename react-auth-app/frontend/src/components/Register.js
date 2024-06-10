import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { name, email, password });
            setMessage('User registered successfully');
        } catch (error) {
            setMessage('User registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Register</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
            <p>{message}</p>
        </form>
    );
};

export default Register;
