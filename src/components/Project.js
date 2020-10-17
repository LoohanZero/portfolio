import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/fa-brands/Github";
import { ExternalLink } from "@styled-icons/evil/ExternalLink";
import Flip from "react-reveal/Flip";

const AnimationContainer = styled.div`
  width: 25%;
  min-height: 540px;
  min-width: 500px;
  margin: 40px;
`;
const ProjectContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 470px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 25px -3px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 60%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 85%;
  min-height: 230px;
  margin: 30px 0 25px 0;
  border-radius: 20px;
`;
const DescriptionContainer = styled.div`
  height: 250px;
  padding-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    height: auto;
  }
`;
const ProjectTitle = styled.h3`
  font-size: 25px;
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
  width: 40%;
  position: absolute;
  top: -50px;
  left: 15px;
`;

const StyledGithub = styled(Github)`
  height: 30px;
  transition: 0.3s ease-in;
`;

const StyledExternalLink = styled(ExternalLink)`
  height: 45px;
  transition: 0.3s ease-in;
`;

const Link = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background-color: #131515;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  box-shadow: -10px -10px 49px -6px rgba(0, 0, 0, 0.9);

  &:hover {
    background-color: #6d6d6d;
    transition: 0.3s ease-in;
  }

  &:hover ${StyledExternalLink} {
    color: #212121;
    transition: 0.3s ease-in;
  }

  &:hover ${StyledGithub} {
    color: #212121;
    transition: 0.3s ease-in;
  }


  &:visited {
    color: #eeeeee;
    transition: 0.3s ease-in;
  }
`;

const Project = ({ title, src, description, github, demo }) => {
  return (
    <AnimationContainer>
      <Flip right>
        <ProjectContainer>
          <Image src={src} />
          <DescriptionContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <LinkContainer>
              <Link href={github} target="_blank">
                <StyledGithub />
              </Link>
              <Link href={demo} target="_blank">
                <StyledExternalLink />
              </Link>
            </LinkContainer>
          </DescriptionContainer>
        </ProjectContainer>
      </Flip>
    </AnimationContainer>
  );
};

export default Project;
