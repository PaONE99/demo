import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'; // Adjust the path as necessary
import Products from './Products'; // Assuming you have these pages
import Pricing from './Pricing';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
