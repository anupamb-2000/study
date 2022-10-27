import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

const theme = createTheme({
  palette: {
    primary: {
      main: "#1aac83",
      contrastText: "#fff", //button text white instead of black
      mode: "dark"
    },
    secondary: {
      main: "#fff"
    },
    error: {
      main: "#e7195a"
    },
    text: {
      primary: "#333",
      secondary: "#666",
    }
  },
  typography: {
    fontFamily: "Poppins"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
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
