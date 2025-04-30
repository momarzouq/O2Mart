import { Link, NavLink } from "react-router-dom";
import Container from "../../UI/Container";
import LogoImg from "../../assets/logo.svg";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Auto Part", path: "/auto-parts" },
    { name: "Batteries", path: "/batteries" },
    { name: "Tyres", path: "/tyres" },
    { name: "Rims", path: "/rims" },
  ];

  return (
    <nav className="bg-black">
      <Container className="relative flex items-center justify-between py-5">
        <Logo />
        <Nav links={links} />
        <span className="md:absolute md:right-14">
          <GetQuteAndShopCart />
        </span>
        <i
          className="bx bx-menu hidden md:flex text-3xl cursor-pointer text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        {isMenuOpen && <MobileNav links={links} />}
      </Container>
    </nav>
  );
}

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/">
        <img src={LogoImg} alt="Logo" className="w-30 h-10 sm:w-20 sm:h-5" />
      </Link>
    </div>
  );
};

const Nav = ({ links }) => {
  return (
    <div className="md:hidden">
      <ul className="flex items-center space-x-1 font-semibold">
        {links.map((link) => (
          <NavLinkComponent key={link.name} link={link} />
        ))}
      </ul>
    </div>
  );
};

const NavLinkComponent = ({ link }) => {
  return (
    <li className="text-gray-600 hover:text-gray-950 py-2 px-5 rounded-2xl">
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "text-red-600 rounded-full px-4 py-2 font-semibold"
            : "text-white"
        }
      >
        {link.name}
      </NavLink>
    </li>
  );
};

const MobileNav = ({ links }) => {
  return (
    <>
      <ul className="absolute z-10 top-16 left-0 w-full bg-white shadow-md py-4 space-y-4 font-semibold text-lg">
        <button className="hidden w-full sm:block bg-red-600 hover:bg-red-700 py-2 rounded-lg text-white font-semibold">
          Get Quote
        </button>
        {links.map((link) => (
          <li
            key={link.name}
            className="py-2 hover:bg-gray-100  rounded-md text-center"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-red-600  font-semibold" : "text-black"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

const GetQuteAndShopCart = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="  bg-red-600 hover:bg-red-700 py-2 px-5 rounded-lg text-white font-semibold sm:hidden">
        Get Quote
      </button>
      <BsPerson color="#FFFFFF" size={25} />
      <AiOutlineShoppingCart color="#FFFFFF" size={25} />
    </div>
  );
};
