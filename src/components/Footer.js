import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 width: 900px; 
height: 400px;
color:white;
justify-content: center;
align-items: center;
/* border: 1px solid white; */
border-radius: 15px;
position: relative;
top: 250px;
margin: auto;




`
const Icon = styled.i`

position: relative;
left: 150px;
top: 100px;
`

const Para = styled.p`
/* text-align: center; */
top: 150px;
position: relative;
left: 150px;



`
const Heading = styled.h1`
text-align: center;
color: white;
`
const FlexContainer = styled.div`
width:300px;
height: 350px;
bottom: 160px;
/* left: 150px; */
float: right;

/* border: 1px solid white; */
position: relative;

border-radius: 12px;
justify-content: center;
align-items: center;
`

const Footer = () => {
    return (
        <>
     <Container>
         <Icon>
         <i class="fab fa-react"> React js</i>
         </Icon>
         <Para>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
              Aut minus itaque eum delectus quo quasi atque non fugiat,<br/> perferendis, eligendi voluptate, voluptatum enim exercitationem.<br/> Odio quaerat recusandae tenetur nostrum quas!
         </Para>
         <Para>
             Copyright © 2021 , All Right Reserved SINDHU MADARI
         </Para>

         <FlexContainer>
             <Heading>
                 Company
                 </Heading>
             <Para>
                 
                 How it works <br/>
                 Careeres <br/> Terms and Conditions
             </Para>

         </FlexContainer>
     </Container>
            
       </>
    )
}

export default Footer
