import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MainLayout from './Layout/MainLayout'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto'

function App() {
  const themeOptions = {
    palette: {
      primary: {
        main: "#0FA1E9",
      },
    },
    Typography: {
      fontFamily: "roboto",
    },
  };
  const theme = createTheme(themeOptions);
  return (
    <>
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Routes>
        </Router>
        <CssBaseline />
        </ThemeProvider>
    </>
  );
}

export default App
