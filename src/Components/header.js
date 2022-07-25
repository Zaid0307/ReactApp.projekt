import styled from "styled-components";
import Logo from "../img/Logo.png";
import { HiDocumentDownload } from "react-icons/hi";
import React from "react";

export default function header() {
  return (
    <Container>
      <IMG src={Logo} alt="Logo" />
      <p>Zaid Ahmed Lonne</p>
      <DownloadContainer>
        <Lebenslauf>Lebenslauf</Lebenslauf>
        <HiDocumentDownload size={40} />
      </DownloadContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;
const IMG = styled.img`
  width: 55px;
`;
const Lebenslauf = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;
const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
`;
