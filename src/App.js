import Footer from "./Components/footer";
import Header from "./Components/header";
import MainContent from "./Components/mainContent";
import styled from "styled-components";
import React from "react";

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
