import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"; // Go up one directory to access assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-space"></div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">الرئيسية</NavLink>
        <NavLink to="/law" className="nav-link">القانون</NavLink>
        <NavLink to="/promise" className="nav-link">الوعد</NavLink>
        <NavLink to="/news" className="nav-link">الأخبار</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;