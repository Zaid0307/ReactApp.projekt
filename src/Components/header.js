import styled from "styled-components"
import Logo from "../img/Logo.png"

export default function header(){
    return (
    <Container>
        <IMG src={Logo} alt="Logo"/>
        <p>Zaid Ahmed Lonne</p>
        <p>Lebenslauf</p>

    </Container>
    );
    
}

const Container = styled.div`
background-color:black;
height: 62px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 15px;
`
const IMG = styled.img`
width: 55px;
`
