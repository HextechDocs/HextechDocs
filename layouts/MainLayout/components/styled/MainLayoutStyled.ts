import styled from "styled-components";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "#0f0f0f",
  dark: "#f0f0f0",
});

const style = styled.div`
  & {
    color: ${textColor};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;

    & > .container {
      align-content: center;
      align-items: center;
      background: pink;
      display: flex;
      flex-direction: row;
      height: 100%;
      justify-content: center;
    }
  }
`;

export default style;
