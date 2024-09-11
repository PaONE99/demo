import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar'; // Adjust the path as necessary
import Products from './Products'; // Assuming you have these pages
import Pricing from './Pricing';
import Blog from './Blog';
import HomePage from './component/HomePage'; 
import AuthPage from './component/AuthPage'; 

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* Conditionally render the Navbar if the user is not on the login page */}
      {location.pathname !== '/' && <Navbar />} 

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
