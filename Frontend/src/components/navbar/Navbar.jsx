import "./navbar.css";
import Logo from "../Logo";
import NavbarLogged from "../NavbarLogged";
import NavbarNotLogged from "../NavbarNotLogged";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.user);
  return (
    <nav className="main-nav">
      <Logo />
      <div>{state.isLogged ? <NavbarLogged /> : <NavbarNotLogged />}</div>
    </nav>
  );
};

export default Navbar;
