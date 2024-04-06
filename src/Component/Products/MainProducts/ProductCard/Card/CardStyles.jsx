import styled, { css } from "styled-components";

const cardStyles = css`
  position: relative;
  width: 320px;
  height: 450px;
  background-color: white ;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e93337;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in;
  }
  &:hover:before {
    background-color: #0057A3 ;
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 10rem;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
  }
  &:hover .imgBox {
    top: 0%;
    transform: translateY(0%);
  }

  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 576px) {
    gap: 10px;
  }

`;

export const CardWrapper = styled.div`
  ${cardStyles}
  box-shadow: 0px 8px 15px -4px rgba(0,0,0,0.3);
  &:hover .contentBox {
    height: 210px;
  }
  &:hover .contentBox .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }
  &:hover .contentBox .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.75s;
  }
  &:hover .contentBox button {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.75s;
  }
`;

export const Container = styled.div`
  margin: 40px;
  gap: 20px;
  display: flex;
  margin-top: 100px !important;
  align-items: flex-start;
  flex-direction: ${(props) => (props.isBigScreen ? 'row' : 'column')};
  
  @media (max-width: 768px) {
    gap: 10px; /* Reduce the gap between cards on smaller screens */
  }

  @media (min-width: 769px) {
    ${CardWrapper} {
      flex: 0 0 calc(33.33% - 20px); /* Maximum of three cards per row */
      max-width: calc(33.33% - 20px);
    }
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%) rotate(-20deg);
    width: 270px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #242424;
  }

  .size,
  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    h3 {
      color: #242424;
      font-weight: 300;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 10px;
    }
    span {
      width: 26px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      font-size: 14px;
      display: inline-block;
      color: #fff;
      background-color: #242424;
      margin: 0 5px;
      border-radius: 4px;
      transition: 0.5s;

      &:hover {
        background-color: #444343;
      }
    }
  }
  .color {
    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff0;
      color: #242424;
      margin: 0 5px;
    }
    span:nth-child(2) {
      background-color: #9bdc28;
    }
    span:nth-child(3) {
      background-color: #e93337;
    }
    span:nth-child(4) {
      background-color: #005dc3;
    }
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #242424;
    color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    opacity: 0;
    transform: translateX(50px);
    transition: 0.5s;
  }

  ${CardWrapper}:hover & {
    height: 210px;
  }

  ${CardWrapper}:hover .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  ${CardWrapper}:hover .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.75s;
  }

  ${CardWrapper}:hover button {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.75s;
  }
`;
