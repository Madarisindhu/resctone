import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
/* background-color: purple; */
font-weight: 800;
top: 1em;
position: relative;
font-size: 35px;
width: 200px;
height: 150px;
margin: auto;
color: white;

`
const Heading = styled.div`
font-size: 20px;
bottom: 30px;
width: 300px;
height:150px;
position: relative;
margin: auto;
font-weight: 500;
color: white;
`
const Search = styled.div`
position: relative;
margin: auto;
width: 230px;
height: 250px;
bottom: 65px;


`

const Home = () => {
    return (
        <>
        <Container>
           React js  😇
           
        </Container>
        <Heading>
      We help you to understand React js
        </Heading>
        <Search>

        <input type="text" placeholder="Search.." name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
        </Search>
        </>
       
       

    )
}

export default Home
