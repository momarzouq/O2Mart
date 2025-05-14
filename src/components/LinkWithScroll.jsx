import { Link } from "react-router-dom";

// مكون LinkWithScroll
const LinkWithScroll = ({ to, children, className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={scrollToTop} // عند الضغط على الرابط، سيتم التمرير للأعلى
    >
      {children}
    </Link>
  );
};

export default LinkWithScroll;
