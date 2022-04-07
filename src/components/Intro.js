import React from "react";
import styled from "styled-components";

function Intro() {
  return (
    <Container>
      <Wrapper>
        <Cont2>
          <Part1>
            <Heading1>Share your unfilterd thoughts. Get paid.</Heading1>
            <Para1>
              Spense is an open platform for individuals to share their
              unfiltered thoughts.
            </Para1>
            <Para1>
              Discuss the topics you love, and get paid for doing just that.
            </Para1>
            <ul>
              <li>
                <img src="../Assets/Checkmark.svg" />
                Recive 99% off the earnings.
              </li>
              <li>
                <img src="../Assets/Checkmark.svg" />
                Get paid via Debit, Credit, ACH or PayPal.
              </li>
              <li>
                <img src="../Assets/Checkmark.svg" />
                Withdraw your earning anytime.
              </li>
            </ul>

            <Newsletter>
              <input type="text" placeholder="john@example.com"></input>
              <Butns cls="#ffffff" bc="#000000">
                Get Started
              </Butns>
            </Newsletter>
          </Part1>
          <Part2>
            <img src="../Assets/Hero Image (Desktop).png" />
          </Part2>
        </Cont2>
      </Wrapper>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  widht: 100vw;
  background-color: #f0eeeb;
`;

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
`;

const Cont2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 87vw;
  margin: auto;
  padding: 30px;
`;

const Part1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style: none;
    margin-top: 20px;
  }

  li img {
    margin-right: 10px;
  }

  li {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const Heading1 = styled.h1`
  font-size: 70px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
`;
const Para1 = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 300;
  text-align: left;
`;

const Part2 = styled.div`
  flex: 1;
  display: flex-end;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Newsletter = styled.div`
  margin-top: 20px;
  input[type="text"] {
    height: 44px;
    padding: 16px;
    border: 0.6px solid gray;
    border-radius: 4px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 300;
  }
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
