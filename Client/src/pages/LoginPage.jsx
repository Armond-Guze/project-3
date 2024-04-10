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
    Auth.logout();
    window.location.reload();
  };

  if (Auth.loggedIn()) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 mt-[-4rem]">
          <h2 className="text-3xl font-bold mb-4 text-center">Already Logged In</h2>
          <p className="text-lg mb-4 text-center">You are already logged in.</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded w-full" onClick={handleLogout}>Logout</button>
          <Link className="block mt-4 text-blue-500 text-center" to="/">Go to Homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 mt-[-4rem]">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full" type="submit">Login</button>
          {error && <p className="text-red-500 mt-2 text-center">Error: {error.message}</p>}
        </form>
        <p className="text-sm mt-4 text-center">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
