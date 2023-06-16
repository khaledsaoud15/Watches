import React from "react";
import header from "../images/watch.png";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Left>
        <h1>Select Your New Perfect Style</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          perferendis doloribus accusamus nisi officia, sed sint cum temporibus
          at deleniti iste laborum odio! Illum in architecto, aut omnis adipisci
          neque?
        </p>
        <button>SHOP NOW</button>
      </Left>
      <Img src={header} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 25px;

  h1 {
    font-size: 4.5rem;
  }
  p {
    line-height: 25px;
    opacity: 0.6;
  }
  button {
    width: 25%;
    padding: 15px 0;
    background-color: #7b7b7b;
    color: #fff;
    border: none;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 25%;
  object-fit: cover;
  animation: pulse 3.5s linear infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
