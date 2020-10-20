import React from "react";
import styled from "styled-components";
import backgroundImage from "../imgs/backgroundphoto.png";
import react from "../imgs/logos/react.png";
import js from "../imgs/logos/js.png";
import html from "../imgs/logos/html.png";
import Fade from "react-reveal/Fade";

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  opacity: 0.4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  background-attachment: fixed;

  @media (max-width: 500px) {
    background-size: contain;
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 10;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  margin-top: 80px;
  text-align: left;
  width: 55%;
  min-width: 660px;

  @media (max-width: 505px) {
    min-width: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  letter-spacing: 5px;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 660px) {
    font-size: 40px;
  }
`;
const Subtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  padding-left: 2px;
  padding: 20px 0;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 660px) {
    font-size: 20px;
  }

  @media (max-width: 505px) {
    width: 80%;
  }
`;
const Span = styled.span`
  color: #1dc2a7;
  padding-left: 25px;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  min-width: 660px;
  padding: 70px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const Text = styled.p`
  color: #eeeeee;
  transition: 0.3s ease-in;
  z-index: 100;
  position: relative;

  &:hover {
    z-index: 100;
    color: #ffffff;
    transition: 0.3s ease-in 0.1s;
  }
`;

const Button = styled.button`
  width: 200px;
  min-width: 150px;
  height: 50px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #eeeeee;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;

  @media (max-width: 660px) {
    width: 150px;
    font-size: 16px;
  }

  &::before {
    content: "";
    width: 200px;
    height: 50px;
    background-color: #eeeeee;
    position: absolute;
    left: -201px;
    top: -1px;
    opacity: 0.9;
    z-index: 0;
    transition: 0.3s ease-in;
  }

  &:hover > ${Text} {
    color: #212121;
    transition: 0.3s ease-in;
    z-index: 100;
  }
  &:hover::before {
    transition: 0.3s ease-in;
    transform: translateX(100%);
  }
`;
const LogosContainer = styled.div`
  display: flex;

  @media (max-width: 450px) {
    padding-top: 20px;
  }
`;
const Logo = styled.img`
  height: 45px;
  padding: 0 30px;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 660px) {
    height: 30px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = ({ element, scroll }) => {
  const handleContactClick = (scroll) => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackgroundImage />
      <StyledHeader ref={element} name="home" scroll={scroll}>
        <Fade bottom>
          <InfoContainer>
            <TitleContainer>
              <Title>Hi there, </Title>
              <Title>
                I'm
                <Span>Luján Sanchez</Span>
              </Title>
              <Subtitle>Frontend & React.Js Developer</Subtitle>
            </TitleContainer>
            <ContactContainer>
              <Button onClick={() => handleContactClick(scroll)}>
                <Text>Contact Me</Text>
              </Button>
              <LogosContainer>
                <Logo src={react} />
                <Logo src={js} />
                <Logo src={html} />
              </LogosContainer>
            </ContactContainer>
          </InfoContainer>
        </Fade>
      </StyledHeader>
    </>
  );
};

export default Header;
