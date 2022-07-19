import styled from "styled-components"
import AboutMe from "./aboutMe"

export default function mainContent(){
    return (
        <Container>
            <AboutMe/>
        </Container>
    )
    
}

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px 15px;
`