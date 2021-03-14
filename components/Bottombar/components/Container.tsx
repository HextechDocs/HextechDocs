import changeTheme from "@actions/ThemeAction";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import StyledContainer from "./styled";

const Container = ({ theme }) => {
  const themer = useSelector((state) => state.ThemeReducer.value);
  const dispatch = useDispatch();

  const themeSwap = () => {
    switch (theme) {
      case "dark":
        dispatch(changeTheme("light"));
        break;
      case "light":
        dispatch(changeTheme("dark"));
        break;
      default:
        dispatch(changeTheme("dark"));
        break;
    }
  };

  return (
    <StyledContainer>
      <div className="container">mem</div>
      <div
        className="theme"
        onClick={() => {
          themeSwap();
        }}
      >
        <span className="material-icons">
          {theme === "dark" ? "dark_mode" : "light_mode"}
        </span>
      </div>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => {
  const { ThemeReducer } = state;

  return { theme: ThemeReducer.mode };
};

export default connect(mapStateToProps)(Container);
