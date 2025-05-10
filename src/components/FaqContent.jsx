import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FaqContent({ toggleContent, isOpen, title, desc }) {
  return (
    <div className="relative">
      <div
        className={`block text-sm appearance-none w-full ${
          isOpen ? "bg-[#EBEBEB]" : "border-2 border-gray-200"
        } rounded-md py-3 px-4 cursor-pointer transition-colors duration-300`}
        onClick={toggleContent}
      >
        <p className="font-semibold">{title}</p>
        {isOpen && (
          <p className="mt-4 pb-2 text-gray-600">
           {desc}
          </p>
        )}
      </div>
      <div
        className="absolute  top-4 right-4 flex items-center px-2 text-Brand cursor-pointer"
        onClick={toggleContent}
      >
        {isOpen ? (
          <FaChevronUp className="h-3 w-3" />
        ) : (
          <FaChevronDown className="h-3 w-3" />
        )}
      </div>
    </div>
  );
}
