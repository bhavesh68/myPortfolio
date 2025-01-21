import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerstl">
      <div>
      <NavLink activeClassName="active">Portfolio</NavLink>
        <a href="https://github.com/bhavesh68" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/bhaveshkhatwani/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;