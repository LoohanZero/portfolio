import React from "react";
import styled from "styled-components";
import photo from "../imgs/photo.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  color: #212121;
  box-shadow: inset 0 0 10px #000000;
  padding-bottom: 30px;

  @media (max-width: 1024px) {
    min-height: 90vh;
  }
`;

const Title = styled.h2`
  padding-top: 30px;
  font-size: 35px;
  letter-spacing: 3px;

  @media (max-width: 1024px) {
    padding: 100px 0 50px 0;
  }
`;

const Text = styled.p`
  padding-bottom: 10px;
  line-height: 23px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  @media (max-width: 1024px) {
    flex-direction: column;
    
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 400px;
    margin-bottom: 50px;
  }
`;

const DescriptionContainer = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const SkillsContainer = styled.div`
  padding-top: 15px;
`;

const Subtitle = styled.h4`
  font-size: 20px;
  padding-bottom: 15px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ListContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }
`;

const List = styled.ul`
  list-style: none;
  width: 50%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

const Span = styled.span`
  color: #0d7377;
  padding-right: 10px;
`;
const ListItem = styled.li``;

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <AboutMeContainer>
        <Image src={photo} alt="It's a picture of me" />
        <DescriptionContainer>
          <Text>
            I'm a 33 year old frontend developer. I'm currently located in
            Menorca, Spain but I'm willing to relocate wherever my job requires.
            I'm curious by nature and I enjoy finding out the whys and hows of
            everything. I like studying and constantly learning new things, it
            keeps my mind awake. I love challenges and working with people,
            there's nothing like the satisfaction of a finished group project.
          </Text>
          <Text>
            I would like the opportunity of joining a team of diverse developers
            so I can improve my front and backend skills. I'm a restless and
            passionate worker and I believe I can bring a lot to the table.
          </Text>
          <SkillsContainer>
            <Subtitle>My Skills</Subtitle>
            <ListContainer>
              <List>
                <ListItem>
                  <Span>○</Span>React.JS with Hooks
                </ListItem>
                <ListItem>
                  <Span>○</Span>Javascript ES6
                </ListItem>
                <ListItem>
                  <Span>○</Span>Sass
                </ListItem>
                <ListItem>
                  <Span>○</Span>HTML5 & CSS3
                </ListItem>
                <ListItem>
                  <Span>○</Span>Bootstrap
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Span>○</Span>Git
                </ListItem>
                <ListItem>
                  <Span>○</Span>Firebase
                </ListItem>
                <ListItem>
                  <Span>○</Span>Responsive Design
                </ListItem>
                <ListItem>
                  <Span>○</Span>Node.JS
                </ListItem>
                <ListItem>
                  <Span>○</Span>MongoDB
                </ListItem>
              </List>
            </ListContainer>
          </SkillsContainer>
        </DescriptionContainer>
      </AboutMeContainer>
    </Section>
  );
};

export default About;
