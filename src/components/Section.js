import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
/* justify-content: space-around; */
color:white;
`


const FlexContainer = styled.div`
width:50%;
height: 500px;

border: 1px solid white;
position: relative;
top: 100px;
border-radius: 12px;
justify-content: center;
align-items: center;
`

const Img = styled.img`
background-image: url();
border-radius: 15px;
`

const Heading = styled.h1`
text-align: center;
color: white;
top: 10px;
bottom: 10px;
position: relative;
`
const Para = styled.p`
text-align: center;
top: 25px;
position: relative;
bottom: 10px;
`
const Section = () => {
    return (
        <>
            <Container>
                <FlexContainer>
                    <Img src="https://cdn.dribbble.com/users/746427/screenshots/14763853/media/7e986263867a950e5421a74bd7f3344d.jpg?compress=1&resize=752x500"/>

                </FlexContainer>
                <FlexContainer>
                    <Heading>
                        We are Training
                    </Heading>
                    <Para>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, vero delectus. Repellendus repudiandae tempore ratione eos autem assumenda vero officiis.   
                    </Para>

                     <Heading>
                        We are Hiring
                    </Heading>
                    <Para>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, vero delectus. Repellendus repudiandae tempore ratione eos autem assumenda vero officiis.   
                    </Para>

                     <Heading>
                        We are Giving time
                    </Heading>
                    <Para>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, vero delectus. Repellendus repudiandae tempore ratione eos autem assumenda vero officiis.   
                    </Para>

                    <Heading>
                        We are Making it possible
                    </Heading>
                    <Para>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, vero delectus. Repellendus repudiandae tempore ratione eos autem assumenda vero officiis.   
                    </Para>

                </FlexContainer>

            </Container>
        </>
    )
}

export default Section
