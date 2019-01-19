import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

// MuiThemeProvider sets a custom color theme. Wrap the parent of what
// is to be changed.
// must create an "intention" by creating a color object
const theme = createMuiTheme({
    palette: {
        primary: { main: '#009688' },
        secondary: { main: '#03a9f4' },
        error: { main: '#e53935' }
    },
    typography: { useNextVariants: true } // useNextVariant allows use of Material-UI v2
});

const app = (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
