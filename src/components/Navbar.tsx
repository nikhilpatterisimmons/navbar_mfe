import { NavLink, BrowserRouter } from "react-router-dom";
import {
  LogoWrapper,
  NavigationBar,
  NavItem,
  StudyText,
} from "./components.styled";
import MriSimmonsLogo from "./images/MriSimmonsLogo";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyleNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  const [study, setStudy] = useState<string>("");

  useEffect(() => {
    window.addEventListener("eventFromCrtb", (customEvent: CustomEvent) => {
      const { detail } = customEvent;
      console.log("inside this", detail);
      setStudy(detail?.sd);
    });
  }, []);

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
        <StudyText>{study}</StudyText>
      </NavigationBar>
    </BrowserRouter>
  );
};

export default Navbar;
