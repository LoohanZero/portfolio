import React from "react";
import styled from "styled-components";
import marvel from "../imgs/projects/MarvelApp.png";
import sipe from "../imgs/projects/SIPE.png";
import wayne from "../imgs/projects/Wayne.png";
import movie from "../imgs/projects/Movies.png";
import oompas from "../imgs/projects/Oompas.png";
import cadt from "../imgs/projects/cadt.png";
import Project from "./Project";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;
`;
const Title = styled.h2`
  margin: 100px 0 20px 0;
  font-size: 35px;
  letter-spacing: 3px;

  @media (max-width: 450px) {
    font-size: 25px; 
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <Section name="projects">
      <Title>My Projects</Title>
      <ProjectsContainer>
      <Project
          title="The CADT Table"
          src={cadt}
          description="App built using ReactJs with hooks, Javascript and Sass. Used linters for JSX and CSS.
          Backend is locally deployed with the json-server package. 
          The design is responsive. 
          It was a challenge I made to start learning and applying Jest and React Testing Library. 
          It's still a work in process."
          github="https://github.com/LoohanZero/cadt-test"
        />
      <Project
          title="The Oompa Selector"
          src={oompas}
          description="App built using ReactJS with hooks, Javascript and CSS. The design is responsive and I
          made the deployment trough the Git terminal to Netlify. It was a challenge I made to get in to my current job post, in Napptilus."
          github="https://github.com/LoohanZero/napptilus-demo"
          demo="https://theoompaselector.netlify.app/"
        />
        <Project
          title="The Ada Movie"
          src={movie}
          description="App based in The Movie Database. It was built using ReactJS with hooks, Javascript, Sass and Firebase. The design is responsive and we
          made the deployment trough the Git terminal to Netlify. It was an
          amazing challenge requested by ADA ITW, our bootcamp, that me and my
          classmates built from scratch using Github as our project organizer.
          The design, develepment and architecture were agreed between all of
          us."
          github="https://github.com/skailish/TP_Final"
          demo="https://theadamovie.netlify.app/"
        />
        <Project
          title="SIPE Carnicerías SRL"
          src={sipe}
          description="Project built from scratch for my former employer as requested.
          Website design, development and architecture done by me and a colleague. 
          I was also in charge of social media, billing, administration, wages, suppliers and cash
          office management."
          github="https://github.com/LoohanZero/SIPECarnicerias"
          demo="https://www.sipecarnicerias.com/"
        />
        <Project
          title="The Marvel App"
          src={marvel}
          description=" Created this project from the ground up using the Marvel API,
          React Js. and Javascript.
          This was a solo project built using the react-router-dom and styled-components packages."
          github="https://github.com/LoohanZero/Marvel-App"
          demo="https://lujanmarvelapp.netlify.app/"
        />
        <Project
          title="Wayne Enterprises"
          src={wayne}
          description="This website was built using HTML5 and Sass as a final HTML5 and CSS3 project for Ada ITW. Design and architecture were provided by the bootcamp but I did by myself the whole development."
          github="https://github.com/LoohanZero/WayneEnterprises"
          demo="https://lujanenterprises.netlify.app/"
        />
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
