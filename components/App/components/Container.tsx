import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

const Container = ({ Component, pageProps, theme }): JSX.Element => (
  <>
    <ThemeProvider theme={{ mode: theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

const mapStateToProps = (state) => {
  const { ThemeReducer } = state;

  return { theme: ThemeReducer.mode };
};

export default connect(mapStateToProps)(Container);
