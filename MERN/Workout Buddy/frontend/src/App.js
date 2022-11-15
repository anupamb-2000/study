import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

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
  const { user } = useAuthContext()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />}  
            />
            <Route 
              path="/signup"  
              element={!user ? <Signup /> : <Navigate to="/" />}  
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
