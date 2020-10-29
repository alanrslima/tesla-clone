import styled from "styled-components";
import modelOne from "../../assets/model_one.jpg";
import modelTwo from "../../assets/model_two.jpg";
import modelThree from "../../assets/model_three.jpg";
import modelFour from "../../assets/model_four.jpg";
import modelFive from "../../assets/model_five.jpg";
import modelSix from "../../assets/model_six.jpg";
import modelSeven from "../../assets/model_seven.jpg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${modelOne});
  }
  .colored:nth-child(2) {
    background-image: url(${modelTwo});
  }
  .colored:nth-child(3) {
    background-image: url(${modelThree});
  }
  .colored:nth-child(4) {
    background-image: url(${modelFour});
  }
  .colored:nth-child(5) {
    background-image: url(${modelFive});
  }
  .colored:nth-child(6) {
    background-image: url(${modelSix});
  }
  .colored:nth-child(7) {
    background-image: url(${modelSeven});
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #000;
`;
