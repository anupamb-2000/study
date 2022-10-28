import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#1aac83",
      contrastText: "#fff" //button text white instead of black
    },
    secondary: {
      main: "#fff"
    },
    error: {
      main: "#e7195a"
    }
  },
  typography: {
    fontFamily: "Poppins"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar theme={theme} />
        <Container>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
