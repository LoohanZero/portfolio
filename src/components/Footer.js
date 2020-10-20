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
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 505px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  padding: 0 15px;
  transition: 0.3s ease-in;
  @media (max-width: 660px) {
    padding: 20px;
  }
`;

const ListItem = styled.li`
  transition: 0.3s ease-in;
  display: flex;
  align-items: center;

  @media (max-width: 505px) {
    box-sizing: content-box;
  }

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
`;

const StyledGithub = styled(Github)`
  height: 25px;
`;
const StyledMail = styled(Mail)`
  height: 25px;
  padding-right: 10px;
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
            <StyledLinkedin />
            <Text>LinkedIn</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/LoohanZero" target="_blank">
            <StyledGithub />
            <Text>Github</Text>
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
