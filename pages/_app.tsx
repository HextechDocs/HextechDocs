import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import App from "@components/App";
import "@styles/globals.sass";
import store from "@store";

import "css-reset-and-normalize/css/reset-and-normalize.css";
import "css-reset-and-normalize/css/button-reset.css";
import "css-reset-and-normalize/css/link-reset.css";

const Hextechdocs = ({ Component, pageProps }): JSX.Element => {
  const meme = "";
  return (
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default Hextechdocs;
