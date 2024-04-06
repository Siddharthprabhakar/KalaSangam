import { CardWrapper, ImgBox, ContentBox } from "./CardStyles";

// eslint-disable-next-line react/prop-types
export default function Card({ prodImg, bgColor, prodTitle, onClick }) {
  return (

    <CardWrapper bgColor={bgColor} onClick={onClick}>
      <ImgBox className="imgBox">
        <img className="image" src={prodImg} alt="" />
      </ImgBox>
      <ContentBox className="contentBox">
        <h2>{prodTitle}</h2>
        <button>ADD TO CART</button>
      </ContentBox>
    </CardWrapper>
  );
}