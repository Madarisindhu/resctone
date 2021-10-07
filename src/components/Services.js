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
/* display: flex; */
/* background-color: black; */
border: 1px solid white;
position: relative;
top: -70px;
border-radius: 12px;
justify-content: center;
align-items: center;
`
const Heading = styled.h1`
text-align: center;
`
const Para = styled.p`
text-align: center;
`
const Button = styled.button`
left: 35%;
position: relative;
top: 25px;
background-color: white;
border-radius: 3px;


`

const Services = () => {
    return (
        <>
        <Container>
        <FlexContainer>
            <Heading>
                React js Topics
            </Heading>
            <Para>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eius tempora maxime consectetur accusantium, eveniet ex ipsa nobis molestias quis adipisci ipsam quos labore repellendus.
            </Para>
            <Button>
                ReadMore
            </Button>
        </FlexContainer>



        <FlexContainer>
            <Heading>
                React js Topics
            </Heading>
            <Para>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eius tempora maxime consectetur accusantium, eveniet ex ipsa nobis molestias quis adipisci ipsam quos labore repellendus.
            </Para>
            <Button>
                ReadMore
            </Button>
        </FlexContainer>

<FlexContainer>
            <Heading>
                React js Topics
            </Heading>
            <Para>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eius tempora maxime consectetur accusantium, eveniet ex ipsa nobis molestias quis adipisci ipsam quos labore repellendus.
            </Para>
            <Button>
                ReadMore
            </Button>
        </FlexContainer>



        </Container>
        </>
    )
}

export default Services
