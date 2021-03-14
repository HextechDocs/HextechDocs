import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#f0f0f0",
  dark: "#111",
});

const Style = styled.div`
  & {
    align-content: center;
    background: ${backgroundColor};
    display: flex;
    height: 10vh;
    width: 100%;

    & > .container {
      width: 100%;
    }

    & > .theme {
      align-content: center;
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: 0 1.5vw;
      text-align: center;
      transition-duration: 300ms;
      user-select: none;
      &:hover {
        opacity: 0.5;
        transition-duration: 300ms;
      }
    }
  }
`;

export default Style;
