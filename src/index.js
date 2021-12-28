import React from 'react';
import ReactDOM from 'react-dom';
//import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import ToggleColorMode from './components/ToggleColorMode';
//import {APP_ID, SERVER} from "./constants/ConstantsMoralis";
//import { BrowserRouter as Router, hashHistory as history } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

// Or Create your Own theme:
export const themes = {
  white:"rgb(" + 255 + "," + 255 + "," + 255 + ")",
  black:"rgb(" + 0 + "," + 0 + "," + 0 + ")",
  blue: "rgb(" + 20 + "," + 147 + "," + 239 + ")",
  orange: "rgb(" + 247 + "," + 147 + "," + 27 + ")",
  lightTheme: {
      mode:'light',
      backgroundColor: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
      backgroundColorReverse: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
      color: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
      colorReverse: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
  },
  darkTheme: {
      mode:'dark',
      backgroundColor: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
      backgroundColorReverse: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
      color: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
      colorReverse: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
  }
}


ReactDOM.render(
  <Router >
  <ToggleColorMode />
  </Router>
  ,
  document.getElementById("root")
);
/*
ReactDOM.render((
  <Router>
    <Route path="/signup">
                <PageSignUp
                    //ethereum={ethereum}
                    //player={player}
                    //onUpdatePlayer={onUpdatePlayer}
                />
            </Route>
    <Route path="/" ><ToggleColorMode /></Route>
    
    </Router>
),
document.getElementById('root')
);
*/
    
/*
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}
*/
    
//render(<App />, document.querySelector('#app'));

//ReactDOM.render(<App />, document.getElementById('root'));
/*
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>, document.getElementById("root"),
  );
  */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();