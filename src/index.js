import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { grey, amber } from '@material-ui/core/colors';

import BWCV from './bw_cv/BWCV'

const themeValpo = createTheme({
    palette: {
        primary: {
            main: '#a62c23'
        },
        secondary: {
            main: amber.A700,
            light: grey[400],
            dark: grey[900]
        },
        type: 'light'
    },
    spacing: 10
})

const themeBW = createTheme({
    palette: {
        primary: {
            main: amber[500]
        },
        secondary: {
            main: grey[400],
            light: grey[200],
            dark: grey[600]
        },
        type: 'light'
    },
    typography: {
        subtitle2: {
          fontSize: 12,
          color: grey[600],
        },
        body1: {
          fontWeight: 500,
        },
        overline: {
            fontSize: 15,
            color: grey[800],
        }
      },
    spacing: 10
})

ReactDOM.render(
    <MuiThemeProvider theme={themeBW}>
        <BWCV />
    </MuiThemeProvider>,
    document.getElementById('app')
)