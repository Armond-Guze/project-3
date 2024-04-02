import axios from "axios";

// Base URL of backend server. Will need to replace with the actual base URL of the backend server, and adjust the login and logout endpoints accordingly to match  backend API routes. Additionally, ensure that the backend server validates the JWT token on each authenticated request to ensure that the user is authenticated and authorized to access the requested resource.
const baseURL = "https://your-backend-server.com/api";

// Function to handle user signup
export const signup = async (formData) => {
    try {
      // Your signup logic here
    } catch (error) {
      console.error("Error signing up:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

// Function to handle user login and retrieve JWT token
export const login = async (formData) => {
  try {
    // Make a POST request to the login endpoint with user credentials
    const response = await axios.post(`${baseURL}/login`, formData);
    // Handle successful login
    console.log("User logged in successfully:", response.data);
    // Store the JWT token in local storage
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    // Handle login errors
    console.error("Error logging in:", error.response.data);
    throw error; // Rethrow the error to handle it in the component
  }
};

// Function to handle user logout and remove JWT token
export const logout = async () => {
  try {
    // Make a POST request to the logout endpoint
    // Optionally, you can send the JWT token as a header to invalidate it on the server side
    const response = await axios.post(`${baseURL}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    // Handle successful logout
    console.log("User logged out successfully:", response.data);
    // Remove the JWT token from local storage
    localStorage.removeItem("token");
  } catch (error) {
    // Handle logout errors
    console.error("Error logging out:", error.response.data);
    throw error; // Rethrow the error to handle it in the component
  }
};

// Function to check if the user is authenticated (JWT token exists)
export const isAuthenticated = () => {
  // Check if a JWT token exists in local storage
  return localStorage.getItem("token") !== null;
};

// Function to retrieve JWT token from local storage
export const getToken = () => {
  // Retrieve the JWT token from local storage
  return localStorage.getItem("token");
};
