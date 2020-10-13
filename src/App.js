import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Nav, Header, About, Projects, Footer } from "./components";
import useSticky from "./hooks/useSticky.js";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body {
  background-color: #212121;
  display: flex;
  font-family: 'Lato', Verdana, Geneva, Tahoma, sans-serif;
  color: #eeeeee;

}
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Main = styled.main``;

function App() {
  const { backgroundColor, header, about } = useSticky();
  console.log(backgroundColor);
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Nav background={backgroundColor} />
      <Header element={header} />
      <Main>
        <Projects />
        <About element={about} />
        <Footer />
      </Main>
    </StyledApp>
  );
}

export default App;
