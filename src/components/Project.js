import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/fa-brands/Github";
import { ExternalLink } from "@styled-icons/evil/ExternalLink";
import Flip from "react-reveal/Flip";

const AnimationContainer = styled.article`
  width: 25%;
  min-height: 540px;
  min-width: 500px;
  margin: 40px;

  @media (max-width: 1200px) {
    width: 60%;
    height: auto;
  }

  @media (max-width: 660px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    margin: 10px;
  }
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

  @media (max-width: 1200px) {
    min-height: 400px;
  }

  @media (max-width: 505px) {
    border-radius: 0px;
  }
`;

const Image = styled.img`
  width: 85%;
  min-height: 230px;
  margin: 30px 0 25px 0;
  border-radius: 20px;

  @media (max-width: 1200px) {
    margin-top: 45px;
  }

  @media (max-width: 420px) {
    min-height: 138px;
    width: 70%;
    
  }

  @media (max-width: 330px) {
    height: 138px;
    width: 65%;
  }
`;
const DescriptionContainer = styled.div`
  height: 250px;
  padding: 10px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1200px) {
    height: auto;
  }

  @media (max-width: 450px) {
    width: 70%;
  }

  @media (max-width: 330px) {
    width: 50%;
  }
`;
const ProjectTitle = styled.h3`
  font-size: 25px;
  padding-top: 20px;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 30px 0;
  }

  @media (max-width: 660px) {
    padding: 10px 0 15px 0;
    font-size: 20px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 25px;
  padding: 5px 15px 30px 15px;
  text-align: justify;
  height: 150px;

  @media (max-width: 1024px) {
    height: auto;
    padding-bottom: 20px;
    text-align: justify;
  }

  @media (max-width: 660px) {
    font-size: 14px;
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

  @media (max-width: 330px) {
    left: 0px;
    justify-content: space-around;
    width: 70%;
  }
`;

const StyledGithub = styled(Github)`
  height: 30px;
  transition: 0.3s ease-in;

  @media (max-width: 660px) {
    height: 25px;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  height: 45px;
  transition: 0.3s ease-in;

  @media (max-width: 660px) {
    height: 35px;
  }
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
  box-shadow: 8px -5px 20px 0px rgba(0, 0, 0, 0.9);

  @media (max-width: 660px) {
    height: 50px;
    width: 50px;
  }

  &:hover ${StyledExternalLink} {
    color: #32e0c4;
    transition: 0.3s ease-in;
  }

  &:hover ${StyledGithub} {
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
