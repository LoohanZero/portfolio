import React from "react";
import styled from "styled-components";
import photo from "../imgs/photo.jpg";
import Slide from "react-reveal/Slide";

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
  justify-content: space-around;
  align-items: center;
  width: 80%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 400px;
    margin-bottom: 50px;
  }
`;

const AnimationDescriptionContainer = styled.div`
  width: 50%;
`;

const DescriptionContainer = styled.div`
  width: 100%;

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
    <Section name="about">
      <Title>About Me</Title>

      <AboutMeContainer>
        <ImageContainer>
          <Slide left duration={500}>
            <Image src={photo} alt="It's a picture of me" />
          </Slide>
        </ImageContainer>
        <AnimationDescriptionContainer>
          <DescriptionContainer>
            <Slide right duration={500}>
              <Text>
                I'm a 33 year old frontend developer. I'm currently located in
                Menorca, Spain but I'm willing to relocate wherever my job
                requires. I'm curious by nature and I enjoy finding out the whys
                and hows of everything. I like studying and constantly learning
                new things, it keeps my mind awake. I love challenges and
                working with people, there's nothing like the satisfaction of a
                finished group project.
              </Text>
              <Text>
                I would like the opportunity of joining a team of diverse
                developers so I can improve my front and backend skills. I'm a
                restless and passionate worker and I believe I can bring a lot
                to the table.
              </Text>
            </Slide>
            <SkillsContainer>
              <Slide right duration={500}>
                <Subtitle>My Skills</Subtitle>
              </Slide>
              <ListContainer>
                <List>
                  <Slide up big delay={500} duration={200}>
                    <ListItem>
                      <Span>○</Span>React.JS with Hooks
                    </ListItem>
                  </Slide>
                  <Slide up big delay={600} duration={200}>
                    <ListItem>
                      <Span>○</Span>Javascript ES6
                    </ListItem>
                  </Slide>
                  <Slide up big delay={700} duration={200}>
                    <ListItem>
                      <Span>○</Span>Sass
                    </ListItem>
                  </Slide>
                  <Slide up big delay={800} duration={200}>
                    <ListItem>
                      <Span>○</Span>HTML5 & CSS3
                    </ListItem>
                  </Slide>
                </List>
                <List>
                  <Slide up big delay={900} duration={200}>
                    <ListItem>
                      <Span>○</Span>Bootstrap
                    </ListItem>
                  </Slide>
                  <Slide up big delay={1000} duration={200}>
                    <ListItem>
                      <Span>○</Span>Git
                    </ListItem>
                  </Slide>
                  <Slide up big delay={1100} duration={200}>
                    <ListItem>
                      <Span>○</Span>Firebase
                    </ListItem>
                  </Slide>
                  <Slide up big delay={1200} duration={200}>
                    <ListItem>
                      <Span>○</Span>Responsive Design
                    </ListItem>
                  </Slide>
                </List>
              </ListContainer>
            </SkillsContainer>
          </DescriptionContainer>
        </AnimationDescriptionContainer>
      </AboutMeContainer>
    </Section>
  );
};

export default About;
