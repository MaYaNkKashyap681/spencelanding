import React from "react";
import styled from "styled-components";

function ToggleBar() {
  return (
    <Container>
      <input type="checkbox" id="check" className="toggle" />
      <label for="check">CheckBox</label>
    </Container>
  );
}

export default ToggleBar;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  input[type="checkbox"].toggle {
    opacity: 0;
    position: absolute;
    left: -9000px;
    top: -9000px;
  }

  input[type="checkbox"].toggle + label {
    display: flex;
    font-size: 40px;
    align-items: center;
    position: relative;
  }

  input[type="checkbox"].toggle + label::before {
    content: "";
    width: 2em;
    height: 1em;
    background-color: gray;
    border-radius: 20px;
  }

  input[type="checkbox"].toggle + label::after {
    content: "";
    width: 0.9em;
    height: 0.9em;
    background-color: lightblue;
    border-radius: 20px;
    position: absolute;
    margin-left: 3px;
    transition: ease-in all 0.6s;
  }
 
  input[type="checkbox"].toggle:checked + label::before {
    background-color: pink;
    
  }

  input[type="checkbox"].toggle:checked + label::after {
    transform: translateX(100%);
    background-color: yellow;

    transition: ease-in all 0.6s;
  }


`;
