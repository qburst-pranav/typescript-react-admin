import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";

// import Main from "./Main";
import MainContainer from "../containers/MainContainer";
import Header from "./Header";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      dark: "#9b0000",
      light: "#ff5131",
      main: "#d50000"
    },
    secondary: {
      contrastText: "#000",
      dark: "#c79100",
      light: "#fff350",
      main: "#ffc107"
    }
  }
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <div className="App">
            <Header />
            <MainContainer />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
