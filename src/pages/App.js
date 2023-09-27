import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/signup', { username, password });
      document.getElementById("dem").innerHTML='User registered successfully';
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      setToken(response.data.token);
      alert('Login successful');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
  
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
                      <p id="dem"></p>
      
            <button onClick={handleSignup}>Sign Up</button>

            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <h2>Home</h2>
            {token && <p>Welcome, you are logged in!</p>}
    </div>
  );
}

export default App;
