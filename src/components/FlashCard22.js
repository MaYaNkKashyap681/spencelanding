import React from "react";
import styled from "styled-components";

function FlashCard22() {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <GridItem>
            <ImgWrapper>
              <img src="../Assets/Text Editor.png" />
            </ImgWrapper>
          </GridItem>
          <GridItem>
            <Contents>
              <Heading1>A text editor like no other.</Heading1>
              <Para1>
                Our text editor pulls you focus mode with it's simplistic design
                and usabuility so you can put out your best writtings.{" "}
              </Para1>
              <a href="">Text Editor Live Demo &#8594;</a>
            </Contents>
          </GridItem>
        </Grid>
      </Wrapper>
    </Container>
  );
}

export default FlashCard22;

const Container = styled.div`
  widht: 100vw;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
  min-height: 300px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
`;

const GridItem = styled.div``;

const ImgWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: center;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 50px;
  padding: 10px;

  a {
    margin-top: 10px;
    color: black;
    font-weight: 300;
  }
`;

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
  margin-bottom: 10px;
`;
