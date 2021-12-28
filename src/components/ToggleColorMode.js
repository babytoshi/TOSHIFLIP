import React, { useState,useMemo, createContext, } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
    const [mode, setMode] = useState('light');
    const black = "rgb(" + 0 + "," + 0 + "," + 0 + ")"; // black
    const white = "rgb(" + 255 + "," + 255 + "," + 255 + ")"; // white
    const red = "rgb(255,0,0)";
    const green = "rgb(0,128,0)";
    const blueBabytoshi = "rgb(" + 20 + "," + 147 + "," + 239 + ")";// blue babytoshi
    const orangeBabytoshi = "rgb(" + 247 + "," + 147 + "," + 27 + ")"; // orange babytoshi
    const yellow = "#FFFF00";
    const grey = "#8C8C8C";
    //const greyDark = "#202020";

    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            primary: {
                main: "rgb(" + 20 + "," + 147 + "," + 239 + ")", // blue babytoshi
                light: "rgb(" + 20 + "," + 147 + "," + 239 + ")", // blue babytoshi
                dark: "rgb(" + 20 + "," + 147 + "," + 239 + ")", // blue babytoshi
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              },
              secondary: {
                main: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                light: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                dark: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                disabled:"rgb(" + 255 + "," + 255 + "," + 255 + ")",
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              },
              error: {
                main: "#d32f2f", // orange babytoshi
                light: '#ef5350', // orange babytoshi
                dark: "#c62828", // orange babytoshi
                disabled:"rgb(" + 255 + "," + 255 + "," + 255 + ")",
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              },
              white: {
                main: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                //light: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                //dark: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                contrastText: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
              },
              blue: {
                main: blueBabytoshi,
                contrastText: white,
              },
              orange: {
                main: orangeBabytoshi,
                contrastText: white,
              },
              red: {
                main: red,
                contrastText: white,
              },
              green: {
                main: green,
                contrastText: white,
              },
              yellow: {
                main: yellow,
                contrastText: white,
              },
              //white: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              black: {
                main: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                //light: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                //dark:"rgb(" + 255 + "," + 255 + "," + 255 + ")",
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              },
              brown: {
                main: "rgb(33,16,0)",
                light: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                darker: "rgb(" + 247 + "," + 147 + "," + 27 + ")", // orange babytoshi
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
              },
              blueLight: {
                main: "rgb(160,248,252)",
                light: "rgb(160,248,252)",
                darker: "rgb(160,248,252)",
                contrastText: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
              },
              colorLiquidity: { // brown
                main: "rgb(33,16,0)",
                light: "rgb(33,16,0)",
                dark: "rgb(33,16,0)",
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")", // white
              },
              colorMarketing: { // brown
                main: blueBabytoshi,
                light: blueBabytoshi,
                dark: blueBabytoshi,
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")", // white
              },
              colorLuckyPlayer: { // brown
                main: orangeBabytoshi,
                light: orangeBabytoshi,
                dark: orangeBabytoshi,
                contrastText: "rgb(" + 255 + "," + 255 + "," + 255 + ")", // white
              },
              colorBurn: { // brown
                main: black,
                light: black,
                dark: black,
                contrastText: white, // white
              },
              divider: grey,
            mode,
            ...(mode === 'light'
            ? {
                // palette values for light mode
                //backgroundColor: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                //primary: amber,
                
                background: {
                    default: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                    reverse: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                    //paper: white,
                },
                text: {
                    primary: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                    secondary: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                },
                }
            : {
                primary: {
                  main: orangeBabytoshi, // orange babytoshi
                  light: orangeBabytoshi, // orange babytoshi
                  dark: orangeBabytoshi, // orange babytoshi
                  //disabled:"rgb(" + 255 + "," + 255 + "," + 255 + ")",
                  contrastText: white,
                },
                colorLiquidity: {
                  main: white,
                  light: white,
                  darker: white,
                  contrastText: white,
                },
                colorBurn: { // brown
                  main: white,
                  light: white,
                  dark: white,
                  contrastText: black, // white
                },
                // palette values for dark mode
                //backgroundColor: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                //primary: deepOrange,
                //divider: orangeBabytoshi,
                background: {
                    default: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                    reverse: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                    //paper: greyDark,
                    //card: red,
                },
                text: {
                    primary: "rgb(" + 255 + "," + 255 + "," + 255 + ")",
                    secondary: "rgb(" + 0 + "," + 0 + "," + 0 + ")",
                },
                }),
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>          
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }