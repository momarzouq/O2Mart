import { Link, NavLink } from "react-router-dom";
import LogoImg from "../assets/logo.svg";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaRegUserCircle,
  FaRegUser,
  FaRegHeart,
  FaCarSide,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import Container from "../UI/Container";
import useModalStore from "../store/getqouteStore";
import useCartStore from "../store/sidebarStore";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openModal = useModalStore((state) => state.openModal);
  const openSidebar = useCartStore((state) => state.openModal);

  const links = [
    { name: "Home", path: "/" },
    { name: "Auto Part", path: "/auto-parts" },
    { name: "Batteries", path: "/batteries" },
    { name: "Tires", path: "/tires" },
    { name: "Rims", path: "/rims" },
  ];

  return (
    <nav className="bg-black">
      <Container className="relative flex items-center justify-between py-5">
        <Logo />
        <Nav links={links} />
        <span className="md:absolute md:right-14">
          <GetQuteAndShopCart openModal={openModal} openSidebar={openSidebar} />
        </span>
        <i
          className="bx bx-menu hidden md:flex text-3xl cursor-pointer text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        {isMenuOpen && <MobileNav links={links} openModal={openModal}/>}
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
      <ul className="flex items-center  font-semibold">
        {links.map((link) => (
          <NavLinkComponent key={link.name} link={link} />
        ))}
      </ul>
    </div>
  );
};

const NavLinkComponent = ({ link }) => {
  return (
    <li className="text-gray-600 hover:text-gray-950 py-2 px-4 rounded-2xl lg:text-sm">
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "text-Brand rounded-full px-4 py-2 font-semibold"
            : "text-white"
        }
      >
        {link.name}
      </NavLink>
    </li>
  );
};

const MobileNav = ({ links, openModal }) => {
  return (
    <ul className="absolute z-50 top-16 left-0 w-full bg-white shadow-md py-4 space-y-4 font-semibold text-lg">
      <button
        onClick={openModal}
        className="hidden w-full md:block bg-Brand hover:bg-red-600 py-2 rounded-lg text-white font-semibold"
      >
        Get Quote
      </button>
      {links.map((link) => (
        <li
          key={link.name}
          className="py-2 hover:bg-gray-100 rounded-md text-center"
        >
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-Brand font-semibold" : "text-black"
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const GetQuteAndShopCart = ({ openModal, openSidebar }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={openModal}
        className=" bg-Brand hover:bg-red-600 py-2 px-5 lg:text-sm rounded-lg text-white font-semibold sm:hidden"
      >
        Get Quote
      </button>
      <ProfileBtnWithModal />
      <AiOutlineShoppingCart
        onClick={openSidebar}
        className="text-white size-7 hover:text-Brand"
      />
    </div>
  );
};

const ProfileBtnWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2"
      >
        <BsPerson color="#FFFFFF" size={25} />
        <span className="sr-only">open profile</span>
      </button>
      {isOpen && <ProfileModal />}
    </div>
  );
};

const profileLinks = [
  { name: "Dashboard", icon: FaRegUser, path: "/dashboard" },
  { name: "Wishlist", icon: FaRegHeart, path: "/wishlist" },
  { name: "Orders", icon: LuShoppingCart, path: "/orders" },
  { name: "Addresses", icon: FiMapPin, path: "/addresses" },
  { name: "My Garage", icon: FaCarSide, path: "/my-garage" },
];

const ProfileModal = () => {
  return (
    <div className="absolute bg-white rounded-[10px] p-5 space-y-2 z-50 top-[calc(100%+1rem)] -right-6 shadow-lg">
      <div className="flex gap-4 pb-4 border-b border-[#BDBDBD]">
        <FaRegUserCircle color="#C2C2C2" size={80} />
        <div className="space-y-2">
          <div>
            <h2 className="text-[18px] font-bold">Test</h2>
            <p className="text-[14px] text-[#616161]">mmm@gmail.com</p>
          </div>
          <button className="bg-[#B2B2B2] py-2 px-3 text-white font-semibold rounded-lg">
            <Link>Edit profile</Link>
          </button>
        </div>
      </div>

      <div className="pb-10 border-b border-[#BDBDBD]">
        {profileLinks.map((link) => (
          <Link
            to={link.path}
            key={link.name}
            className="flex items-center gap-2 py-2 font-semibold hover:bg-gray-100"
          >
            <link.icon size={24} />
            {link.name}
          </Link>
        ))}
      </div>

      <button className="text-Brand font-semibold flex items-center gap-2 py-3">
        <IoMdLogOut size={24} /> Logout
      </button>
    </div>
  );
};
