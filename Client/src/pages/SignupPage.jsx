import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

function SignupPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '', username: '' });
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleFormSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username:</label>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-700">
        Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
      </p>
    </div>
  );
}

export default SignupPage;



