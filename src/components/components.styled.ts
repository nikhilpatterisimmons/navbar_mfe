import styled from 'styled-components'

export const NavigationBar = styled.div`
  height: 48px;
  background-color: rgb(49, 0, 59);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
`;

export const LogoWrapper = styled.div`
  padding-left: 24px;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  cursor: pointer;
  margin-left: 100px;
  height: 100%;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 16px;
  font-family: 'Lato';
  display: flex;
  align-items: center;
`;

export const StudyText = styled.div`
  display: flex;
  color: aqua;
  font-size: 11px;
  margin-left: auto;
  margin-right: 16px;
`;