import {
  FaHeart,
  FaBox,
  FaUser,
  FaCreditCard,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTruck,
  FaAddressBook,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const DashboardSideNav = () => {
  const loc = useLocation();
  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt />, href: "/dashboard" },
    { label: "wishlist", icon: <FaHeart />, href: "/wishlist" },
    { label: "orders", icon: <FaBox />, href: "/orders" },
    { label: "order Tracking", icon: <FaTruck />, href: "/order-tracking" },
    { label: "Saved Cards", icon: <FaCreditCard />, href: "/saved-cards" },
    { label: "Address Book", icon: <FaAddressBook />, href: "/addresses" },
    { label: "Account details", icon: <FaUser />, href: "/account-details" },
    {
      label: "Security",
      icon: <MdOutlineSecurity />,
      href: "/change-password",
    },
    { label: "My garage", icon: <FaTruck />, href: "/my-garage" },
    { label: "Logout", icon: <FaSignOutAlt />, href: "/log-out", danger: true },
  ];
  return (
    <div className="w-full max-w-[200px] space-y-3 md:self-center">
      {menuItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.href}
          className={`flex items-center gap-2 px-4 py-4 rounded-lg font-medium text-sm transition ${
            item.danger
              ? "text-Brand hover:bg-red-100"
              : loc.pathname === item.href
              ? "bg-Brand text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DashboardSideNav;
