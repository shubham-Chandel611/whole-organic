import React, { Component } from "react";
import "./assets/css/index.css";
import AppRouter from "./routers/AppRouter";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    );
  }
}

export default App;
