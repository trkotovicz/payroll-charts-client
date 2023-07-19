import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3267AC',
    },
    background: {
      default: '#fff',
      secondary: '#3267AC',
    },
  },
  typography: {
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    // h1: {
    //   fontSize: "3rem",
    //   fontWeight: 600,
    //   },
    // h2: {
    //   fontSize: "1.75rem",
    //   fontWeight: 600,
    // },
    // h3: {
    //   fontSize: "1.5rem",
    //   fontWeight: 600,
    // },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
