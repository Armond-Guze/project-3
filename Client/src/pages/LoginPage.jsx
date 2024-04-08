import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function LoginPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogout = () => {
    // Clear the authentication token
    Auth.logout();
    // Redirect to login page
    window.location.reload(); // You may replace this with a route change if using React Router
  };

  // Check if user is already logged in
  if (Auth.loggedIn()) {
    return (
      <div>
        <h2>Already Logged In</h2>
        <p>You are already logged in.</p>
        <button onClick={handleLogout}>Logout</button>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
