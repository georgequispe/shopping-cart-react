// src/components/styled/NavBarStyled.js
import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const StyledNavbar = styled.div`
  background-color: #222;
  padding: 0.5rem 0;
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #fff !important;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #ffb347 !important;
  }
`;

export const CartCount = styled.span`
  margin-left: 5px;
  font-weight: bold;
  color: #00ffcc;
`;