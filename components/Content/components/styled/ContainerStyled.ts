import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#f0f0f0",
  dark: "#1f1f1f",
});

const border = theme("mode", {
  light: "#fff",
  dark: "#2a2a2a",
});

const Style = styled.div`
  & {
    background: ${backgroundColor};
    border-left: 1px solid ${border};
    height: 100%;
    width: 100%;
  }
`;

export default Style;
