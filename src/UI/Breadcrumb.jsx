import { Link } from "react-router-dom";

export const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-700 space-x-2 pb-4 border-b-2 border-[#E0E0E0] mt-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index !== 0 && <span className="text-[#9A9A9A]">›</span>}
          <Link
            to={item.href}
            className={`${
              index === items.length - 1 || !item.href
                ? "font-medium text-black"
                : "hover:underline"
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};
