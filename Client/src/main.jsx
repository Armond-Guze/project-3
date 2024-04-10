import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FavoritePage from './pages/FavoritePage.jsx';
import NoMatch from './pages/NoMatch';
import AboutusPage from './pages/AboutusPage.jsx'; // Correct import here
import PrivacyPage from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MerchPage from './pages/Merch.jsx'; // Import the MerchPage component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <HomePage />
      }, {
        path: '/login',
        element: <LoginPage />
      }, {
        path: '/signup',
        element: <SignupPage />
      }, {
        path: '/favorite',
        element: <FavoritePage />
      }, {
        path: '/aboutus',
        element: <AboutusPage />
      }, {
        path: '/privacy-policy',
        element: <PrivacyPage />
      }, {
        path: '/terms-of-service',
        element: <TermsOfService />
      }, {
        path: '/contact-us',
        element: <ContactPage />
      },
      {
        path: '/merch', // Add the new route for the merch page
        element: <MerchPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);














