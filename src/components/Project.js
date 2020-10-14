import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/fa-brands/Github";
import { ExternalLink } from "@styled-icons/evil/ExternalLink";

const ProjectContainer = styled.div`
  width: 25%;
  min-height: 550px;
  min-width: 500px;
  margin: 40px;
  background-color: #5f5f5f;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 10px 49px -6px rgba(0,0,0,0.75);

  @media (max-width: 1024px) {
    width: 60%;
    height: auto;
  }
`;

const ImageContainer = styled.div;
const Image = styled.img`
  width: 100%;
  height: 245px;
`;
const DescriptionContainer = styled.div`
  height: 305px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: auto;
  }
`;
const ProjectTitle = styled.h3`
  font-size: 25px;
  padding: 25px 15px;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 25px;
  padding: 5px 15px 15px 15px;
  text-align: justify;
  height: 150px;

  @media (max-width: 1024px) {
    height: auto;
    padding-bottom: 20px;
    text-align: center;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const StyledGithub = styled(Github)`
  height: 30px;
  transition: 0.3s ease-in;
`;

const StyledExternalLink = styled(ExternalLink)`
  height: 45px;
  transition: 0.3s ease-in;
`;
const LinkText = styled.p`
  transition: 0.3s ease-in;
  padding: 0 10px;
`;
const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover ${StyledGithub} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }

  &:hover ${StyledExternalLink} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }

  &:hover ${LinkText} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }

  &:visited {
    color: #eeeeee;
    transition: 0.3s ease-in;
  }
`;

const Project = ({ title, src, description, github, demo }) => {
  return (
    <ProjectContainer>
      <Image src={src} />
      <DescriptionContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <LinkContainer>
          <Link href={github} target="_blank">
            <StyledGithub />
            <LinkText>Github</LinkText>
          </Link>
          <Link href={demo} target="_blank">
            <StyledExternalLink />
            <LinkText>Demo</LinkText>
          </Link>
        </LinkContainer>
      </DescriptionContainer>
    </ProjectContainer>
  );
};

export default Project;
