import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>spence.</Logo>

        <Navss>
          <a href="#">Business</a>
          <a href="#">Pricing</a>
          <a href="#">Features</a>
        </Navss>

        <ButtonWrap>
          <Butns cls="#000000" bc="#F0EEEB">
            Login
          </Butns>
          <Butns cls="#ffffff" bc="#000000">
            Get Started
          </Butns>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  width: 100vw;
  height: 16vh;
  background-color: #f0eeeb;
`;

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Navss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 16px;
    margin: 0 6px;
  }
`;

const ButtonWrap = styled.div`
  display: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Butns = styled.button`
  padding: 16px;
  widht: 100px;
  color: ${(props) => props.cls};
  background-color: ${(props) => props.bc};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
