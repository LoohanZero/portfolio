import React from "react";
import styled from "styled-components";
import { LinkedinIn } from "@styled-icons/fa-brands/LinkedinIn";
import { Github } from "@styled-icons/fa-brands/Github";
import { Mail } from "@styled-icons/feather/Mail";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: inherit; 

  &:visited {
    color: #eeeeee;
  }
`;

const Text = styled.p`
  padding: 30px;
  transition: 0.3s ease-in;
 
`;

const ListItem = styled.li`
  padding: 30px;
  transition: 0.3s ease-in;
  display: flex; 
  align-items: center; 

  &:hover ${Link} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }

  &:hover ${Text} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }
`;

const StyledLinkedin = styled(LinkedinIn)`
  height: 25px;
  padding: 0 15px;
`;

const StyledGithub = styled(Github)`
  height: 25px;
  padding: 0 15px;
`;
const StyledMail = styled(Mail)`
  height: 25px;
  padding: 0 15px;
`;

const Footer = ({ element }) => {
  return (
    <StyledFooter name="contact" ref={element}>
      <List>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/lujansanchez/"
            target="_blank"
          >
            <StyledLinkedin /> LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/LoohanZero" target="_blank">
            <StyledGithub /> Github
          </Link>
        </ListItem>
        <ListItem>
          <Text>
            <StyledMail /> mlulasan@gmail.com
          </Text>
        </ListItem>
      </List>
    </StyledFooter>
  );
};

export default Footer;
