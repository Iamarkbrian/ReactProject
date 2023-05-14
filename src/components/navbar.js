import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src="/pictures/LogoMakr-0fwK60.png" alt="Br Clothing" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            Add to Cart
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
