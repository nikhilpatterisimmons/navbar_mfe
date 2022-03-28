import { NavLink, BrowserRouter } from "react-router-dom";
import { LogoWrapper, NavigationBar, NavItem } from "./components.styled";
import MriSimmonsLogo from "./images/MriSimmonsLogo";
import styled from "styled-components";

const StyleNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <NavigationBar>
        <LogoWrapper>
          <MriSimmonsLogo />
        </LogoWrapper>
        <NavItem>
          <StyleNavLink to="crosstab">Crosstab</StyleNavLink>
        </NavItem>
        <NavItem>
          <StyleNavLink to="catalyst">Catalyst</StyleNavLink>
        </NavItem>
        <NavItem>
          <StyleNavLink to="datahub">Datahub</StyleNavLink>
        </NavItem>
      </NavigationBar>
    </BrowserRouter>
  );
};

export default Navbar;
