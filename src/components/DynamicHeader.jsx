import { Link, useLocation } from "react-router-dom";

const DynamicHeader = () => {
  const location = useLocation();

  const rawPath = location.pathname.replace(/\/+$/, "");
  const lastSegment = rawPath.substring(rawPath.lastIndexOf("/") + 1) || "home";
  const formattedTitle = lastSegment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
      <div className="dynamic_header">
        <div className="dynamic_header-container">          
      <h1 className="dynamic_header-title">{formattedTitle}</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <span className="circle"></span>
        <Link to={location.pathname} className="nav-link active">
          {formattedTitle}
        </Link>
      </nav>
          </div>
    </div>
  );
};

export default DynamicHeader;
