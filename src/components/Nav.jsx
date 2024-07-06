import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import favorites from "../assets/favorites.svg";
import cart from "../assets/cart.svg";
import logo from "../assets/LOGO.jpg";
import Account from "../assets/Account.png";
const Nav = ({ searchTerm, onSearchTermChange }) => {
  const handleInputChange = (event) => {
    onSearchTermChange(event.target.value);
  };
  return (
    <nav className="flex justify-between py-5 px-[5%] top-0 w-full  bg-[#F5F5F5]">
      <div>
        <img src={logo} alt="logo" className="w-[10vh] h-[5vh]" />
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link
              to="/"
              className="mx-4 font-semibold hover:text-lg hover:underline transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="mx-4 font-semibold hover:text-lg hover:underline transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="mx-4 font-semibold hover:text-lg hover:underline transition-all"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="border border-gray-500 rounded-xl px-4 py-1 bg-[#F5F5F5] focus:outline-none "
          />
        </div>
        <div className="flex">
          <span className="mx-4 px-1 py-1 rounded-full bg-[#F5F5F5]  border-r-5 hover:bg-[#b3bec0] transition-all">
            <a href="/">
              <img src={favorites} alt="favorites icon" width={20} />
            </a>
          </span>
          <span className="mx-4 px-1 py-1 rounded-full bg-[#F5F5F5]  border-r-5 hover:bg-[#b3bec0] transition-all">
            <a href="/">
              <img src={cart} alt="cart icon" width={20} />
            </a>
          </span>
          <span className="mx-4 px-1 py-1 rounded-full bg-[#F5F5F5]  border-r-5 hover:bg-[#b3bec0] transition-all">
            <Link to="/login">
            <a href="/">
              <img src={Account} alt="cart icon" width={20} />
            </a>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default Nav;
