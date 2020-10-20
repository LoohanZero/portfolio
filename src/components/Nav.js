import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const ListItemHoverLeft = styled.div`
  border-bottom: 2px solid #32e0c4;
  height: 25px;
  width: 37px;
  position: absolute;
  left: -40px;
  transition: 0.3s ease-in-out;
`;

const ListItemHoverRight = styled.div`
  border-bottom: 2px solid #32e0c4;
  height: 25px;
  width: 37px;
  position: absolute;
  right: -40px;
  transition: 0.3s ease-in-out;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${(props) => props.background};
  transition: all 0.1s ease-in-out;
  color: ${(props) => (props.background === "#d6d6d6" ? "#212121" : "#eeeeee")};

  .active {
    border-bottom: 2px solid #32e0c4;

    & ${ListItemHoverLeft} {
      display: none;
    }

    & ${ListItemHoverRight} {
      display: none;
    }
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 45%;

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 505px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  height: 27px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover a {
    color: ${(props) =>
      props.background === "#d6d6d6" ? "#474747" : "#bebebe"};
    transition: 0.2s ease-in-out;
  }

  & a:visited {
    color: ${(props) =>
      props.background === "#d6d6d6" ? "#474747" : "#bebebe"};
    transition: 0.2s ease-in-out;
  }
  &:hover ${ListItemHoverLeft} {
    transform: translateX(40px);
    transition: 0.3s ease-in-out;
  }
  &:hover ${ListItemHoverRight} {
    transform: translateX(-40px);
    transition: 0.3s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: inherit;
`;

const Nav = ({ background }) => {
  return (
    <StyledNav background={background}>
      <List>
        <ListItem background={background}>
          <StyledLink
            to="home"
            smooth={true}
            spy={true}
            duration={1000}
            activeClass="active"
          >
            <ListItemHoverLeft />
            <ListItemHoverRight />
            Home
          </StyledLink>
        </ListItem>
        <ListItem background={background}>
          <StyledLink
            to="projects"
            smooth={true}
            spy={true}
            duration={1000}
            activeClass="active"
          >
            <ListItemHoverLeft />
            <ListItemHoverRight />
            Projects
          </StyledLink>
        </ListItem>
        <ListItem background={background}>
          <StyledLink
            to="about"
            smooth={true}
            spy={true}
            duration={1000}
            activeClass="active"
          >
            <ListItemHoverLeft />
            <ListItemHoverRight />
            About
          </StyledLink>
        </ListItem>
      </List>
    </StyledNav>
  );
};

export default Nav;
