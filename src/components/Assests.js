import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: space-around;
color:white;

`

const FlexContainer = styled.div`
width:350px;
height: 300px;
/* background-image: url(https://cdn.dribbble.com/users/792073/screenshots/16602854/media/adb0839a75154a219f73483699654c88.jpg?compress=1&resize=350x300); */


border: 1px solid white;
position: relative;
top: 55px;
border-radius: 12px;
justify-content: center;
align-items: center;
`
const Img = styled.img`
background-image: url();
border-radius: 12px;
`


const Heading = styled.h1`
/* text-align: center; */
color: white;


top: 35px;
position: relative;

`


const Assests = () => {
    return (
        <>
            <Container>
                <FlexContainer>
                    <Img src="https://cdn.dribbble.com/users/792073/screenshots/16602854/media/adb0839a75154a219f73483699654c88.jpg?compress=1&resize=350x300"/>
                </FlexContainer>
                
                <FlexContainer>
                    <Img src="https://cdn.dribbble.com/users/746427/screenshots/15236543/media/bded4653ba40dd21b4f2364840111be1.png?compress=1&resize=350x300"/>
                </FlexContainer>
                <FlexContainer>
                    <Img src="https://cdn.dribbble.com/users/746427/screenshots/15763072/media/19b332762aca567bc99b40203b359bb9.jpg?compress=1&resize=350x300"/>
                </FlexContainer>
               

            </Container>
            <Container>

            <Heading>
                    Training
                </Heading>
                <Heading>
                    Placements
                </Heading>
                <Heading>
                    Joining
                </Heading>
            </Container>
        </>
    )
}

export default Assests
