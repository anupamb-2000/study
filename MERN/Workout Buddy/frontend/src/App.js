import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#1aac83",
      contrastText: "#fff" //button text white instead of black
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
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup"  
              element={<Signup />} 
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
