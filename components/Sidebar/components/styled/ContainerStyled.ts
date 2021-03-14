import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#f0f0f0",
  dark: "#1a1a1a",
});

const Style = styled.div`
  & {
    background-color: ${backgroundColor};
    height: 100%;
    min-width: 200px;
    width: 15vw;
  }
`;

export default Style;
