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
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  letter-spacing: 5px;

  @media (max-width: 900px) {
    text-align: center;
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

const Logo = styled.img`
  height: 45px;
  padding: 0 30px;

  @media (max-width: 1024px) {
    padding: 0 15px;
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
        <InfoContainer>
          <Fade bottom>
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
              <Logo src={react} />
              <Logo src={js} />
              <Logo src={html} />
            </ContactContainer>
          </Fade>
        </InfoContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
