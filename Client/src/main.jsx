import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FavoritePage from './pages/FavoritePage';
import NoMatch from './pages/NoMatch'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <HomePage />
      }, 
      {
        path: '/login',
        element: <LoginPage />
      }, 
      {
        path: '/signup',
        element: <SignupPage />
      }, 
      {
        path: '/favorite',
        element: <FavoritePage />
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: '/terms-of-service',
        element: <TermsOfService />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)



















