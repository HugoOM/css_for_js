import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");
  const theme = {
    width_breakpoints: {
      phone_min: "37.5rem",
      tablet_min: "59.375rem",
      laptop_min: "81.25rem",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
        </Main>
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  /* @media (min-width: ${(props) => props.theme.width_breakpoints.phone_min}) {
    background: blue;
  }
  @media (min-width: ${(props) => props.theme.width_breakpoints.tablet_min}) {
    background: red;
  }
  @media (min-width: ${(props) => props.theme.width_breakpoints.laptop_min}) {
    background: green;
  } */
`;

export default App;
