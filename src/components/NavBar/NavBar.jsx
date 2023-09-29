import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="Nav_Bar">
      <div>HelpMeout</div>
      <div className="features">
        <a href=""> Features</a>
        <a href=""> How it Works</a>
      </div>
      <a href="" className="get_started">
        Get Started
      </a>
    </nav>
  );
};

export default NavBar;
