import React from "react";
import styled from "styled-components";

function FlashCard() {
  return (
    <Container>
      <Wrapper>
        <Cont2>
          <Part1>
   
          <Heading1>Secure your money with Escrow.</Heading1>
            <Para1>
            Spence using Escrow to secure all payments. We belive Escrow offers the highest level of security for your payments, so you never need to worry about scams.
            </Para1>

            <a href = "">Learn more about Escrow &#8594;</a>
          </Part1>
          <Part2>
           <img src = "../Assets/Phone Mockup.png"/>
          </Part2>
        </Cont2>
      </Wrapper>
    </Container>
  );
}

export default FlashCard;

const Container = styled.div`
  widht: 100vw;
  background-color: #ffffff;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
  background-color: #f0eeeb;
  min-height: 300px;
  border-radius: 6px;
`;

const Cont2 = styled.div`
    display: flex;
    flex-direction: row;
    
`;

const Part1 = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
padding: 70px 50px;
margin-left: 40px;
 a {
     color: black;
     font-weight: 300;
     margin-top: 10px;
 }
`

const Heading1 = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;
const Para1 = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: 300;
  text-align: left;
`;

const Part2 = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   min-height: 300px;

   img {
       width: 100%;
       height: 100%;
       object-position: right;
       object-fit: cover;
   }
`