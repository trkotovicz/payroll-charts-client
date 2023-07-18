import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#42a5f5",
//       main: "#1976d2",
//       dark: "#1565c0",
//     },
//     secondary: {
//       light: "#ba68c8",
//       main: "#9c27b0",
//       dark: "#7b1fa2",
//     },
//     error: {
//       light: "#ef5350",
//       main: "#d32f2f",
//       dark: "#c62828",
//     }
//   },
//   typography: {
//     h1: {
//       fontSize: "3rem",
//       fontWeight: 600,
//     },
//     h2: {
//       fontSize: "1.75rem",
//       fontWeight: 600,
//     },
//     h3: {
//       fontSize: "1.5rem",
//       fontWeight: 600,
//     },
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4',
    },
    background: {
      default: '#fff',
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
