import { Box, FormControl, TextField, Button, Alert, Card, CardContent } from "@mui/material"
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return(
        <Card sx={{m: 10}}>
            <CardContent>
                <Box component="form" 
                    autoComplete="off" 
                    className="login" 
                    onSubmit={handleSubmit} 
                    sx={{ display: "flex", flexDirection: "column", textAlign: 'center' }}
                >
                    <h3>Log In</h3>
                    <FormControl sx={{ m: 2 }}>
                        <TextField 
                            color="text"
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                            label="Email:"
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 2 }}>
                        <TextField 
                            color="text"
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                            label="Password:"
                            variant="outlined"
                        />
                    </FormControl>
                    <Button sx={{ m: 2 }} variant="contained" type="submit" disabled={isLoading}>Log In</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>
            </CardContent>
        </Card>
    )
}

export default Login