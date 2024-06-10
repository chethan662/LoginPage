import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
    const [user, setUser] = useState('');

    return (
        <div className="app">
            <h1>React Authentication App</h1>
            {user ? <h2>Welcome, {user}!</h2> : (
                <div className="auth-container">
                    <Register />
                    <Login setUser={setUser} />
                </div>
            )}
        </div>
    );
};

export default App;



