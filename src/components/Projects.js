import React from "react";
import styled from "styled-components";
import marvel from "../imgs/projects/MarvelApp.png";
import sipe from "../imgs/projects/SIPE.png";
import wayne from "../imgs/projects/Wayne.png";
import movie from "../imgs/projects/Movies.png";
import Project from "./Project";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  padding: 100px 0 20px 0;

  font-size: 35px;
  letter-spacing: 3px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Title>My Projects</Title>
      <ProjectsContainer>
        <Project
          title="The Ada Movie"
          src={movie}
          description="App based in The Movie Database. It was built using React.js with hooks, Javascript, Sass and Firebase. The design is responsive and we
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
          Website design, development and architecture. Social media
          management. Billing, administration. Wages, suppliers and cash
          office management."
          github="https://github.com/LoohanZero/SIPECarnicerias"
          demo="https://www.sipecarnicerias.com/"
        />
        <Project
          title="The Ada Movie"
          src={movie}
          description="App based in The Movie Database. It was built using React.js with hooks, Javascript, Sass and Firebase. The design is responsive and we
          made the deployment trough the Git terminal to Netlify. It was an
          amazing challenge requested by ADA ITW, our bootcamp, that me and my
          classmates built from scratch using Github as our project organizer.
          The design, develepment and architecture were agreed between all of
          us."
          github={"https://github.com/skailish/TP_Final"}
          demo={"https://theadamovie.netlify.app/"}
        />
        <Project
          title="The Marvel App"
          src={marvel}
          description=" Created this project from the ground up using the Marvel API,
          React Js. and Javascript."
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
