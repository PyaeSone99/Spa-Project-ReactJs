import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './styles/share';
import { ThemeProvider } from 'styled-components';
import { GlobalCss } from './styles/GlobalCss';
import Home from './components/Home';
import Login from './components/Login';
import LoginContextProvider from './Api/LoginContextApi';
import  RouteGuard  from './Api/RouteGuard';

const theme = {
  colors : {
    primary : "#008DFF",
    secondary : "#7E506C",
    third : "#AAAABC"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <LoginContextProvider>
          <Router>
            <Routes>
              <Route path="/home" element={
                <RouteGuard>
                  <Home />
                </RouteGuard>
              } />
              <Route path='/' element={<Login />
              } />
            </Routes>
          </Router>
        </LoginContextProvider>
      </Container>
    </ThemeProvider>

  );
}

export default App;
