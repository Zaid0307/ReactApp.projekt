import styled from "styled-components";
import React from "react";

export default function footer() {
  return (
    <Container>
      <Name>Zaid Ahmed Lonne</Name>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 31px;
`;
const Name = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
`;
