import './App.css';
import Form from './components/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Home from './components/Home';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider()
    const authentication = getAuth()
    signInWithPopup(authentication, provider)
      .then((result) =>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        sessionStorage.setItem('Auth Token', token)
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, email, credential)
      })
  }
  
  const handleActon = (id) => {
    const authentication = getAuth()
  
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email already in use')
          }
        })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
          navigate('/home')
      }
  }, [])
  
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" 
                 element={
                  <Form 
                    title="Login"
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleActon={() => handleActon(1)} 
                    handleGoogle={() => handleGoogle()} />} />
          <Route path="/register" 
                 element={
                  <Form 
                    title="Register"
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleActon={() => handleActon(2)} />} />
          <Route
            path='/home'
            element={
              <Home />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
