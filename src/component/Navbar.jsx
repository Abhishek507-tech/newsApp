import { NavLink } from "react-router-dom";

const Navbar = ({setCategories,setCountry}) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "hover:text-yellow-300";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          News<span className="text-white">App</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><NavLink to="/" className={linkClass}>Top Headlines</NavLink></li>
          <li><NavLink to="/business" className={linkClass}>Business</NavLink></li>
          <li><NavLink to="/technology" className={linkClass}>Technology</NavLink></li>
          <li><NavLink to="/sports"  className={linkClass}>Sports</NavLink></li>
          <li><NavLink to="/entertainment" className={linkClass}>Entertainment</NavLink></li>
          <li><NavLink to="/health" className={linkClass}>Health</NavLink></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
