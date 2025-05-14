import { Link } from "react-router-dom";

const LinkWithScroll = ({ to, children, className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={scrollToTop} 
    >
      {children}
    </Link>
  );
};

export default LinkWithScroll;
