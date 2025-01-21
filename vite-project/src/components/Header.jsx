import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div><h1>Bhavesh Khatwani</h1></div>
      <nav>
          <NavLink to="/" activeClassName="active">About Me</NavLink>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header;