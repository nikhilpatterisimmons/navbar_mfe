import { NavLink, BrowserRouter } from "react-router-dom";
import { LogoWrapper, NavigationBar, NavItem } from "./components.styled";
import MriSimmonsLogo from "./images/MriSimmonsLogo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const StyleNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  const [study, setStudy] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("eventFromCrtb", (customEvent: CustomEvent) => {
      const { detail } = customEvent;
      console.log("inside this", detail);
      setStudy(detail?.sd);
      setOpen(true);
    });
  }, []);

  const handleClose = (): void => {
    setOpen(false);
  };

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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {study}
        </Alert>
      </Snackbar>
    </BrowserRouter>
  );
};

export default Navbar;
