import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red, amber } from '@material-ui/core/colors';

import CV from './components/CV'

const theme = createTheme({
    palette: {
        primary: {
            main: '#248EA6'
        },
        secondary: {
            main: amber.A400,
            light: amber[200],
            dark: amber[700]
        },
        type: 'light'
    },
    spacing: 10
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CV />
    </MuiThemeProvider>,
    document.getElementById('app')
)