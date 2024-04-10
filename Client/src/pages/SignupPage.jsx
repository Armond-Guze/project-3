import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

function SignupPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createUser({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.createUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 mt-[-4rem]"> {/* Adjusted margin-top */}
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full" type="submit">Sign Up</button>
        </form>
        <p className="text-sm mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
