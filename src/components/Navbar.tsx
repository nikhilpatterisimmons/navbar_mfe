import { LogoWrapper, NavigationBar } from "./components.styled";
import MriSimmonsLogo from "./images/MriSimmonsLogo";

const Navbar = () => {
  return (<NavigationBar>
    <LogoWrapper>
    <MriSimmonsLogo />
    </LogoWrapper>
  </NavigationBar>)
};

export default Navbar;