import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./shared/components/Header";
import { darkTheme } from "./shared/styles/themes";

function App() {
  // Add theming here
  const theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
