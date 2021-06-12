import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import img1 from "../../images/svg-1.svg";
import img2 from "../../images/profile.jpg";
import img3 from "../../images/svg-2.svg";
import img4 from "../../images/svg-3.svg";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  primary,
  img,
  alt,
  start,
  id,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img
                  src={
                    id === 1 ? img1 : id === 2 ? img2 : id === 3 ? img3 : img4
                  }
                  alt={alt}
                />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
