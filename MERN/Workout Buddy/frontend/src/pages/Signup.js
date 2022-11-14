import { Box, FormControl, TextField, Button } from "@mui/material"
import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return(
        <Box component="form" 
             autoComplete="off" 
             classname="login" 
             onSubmit={handleSubmit} 
             sx={{ textAlign: 'center' }}
        >
            <h3>Sign Up</h3>
            <FormControl fullWidth sx={{ m: 2 }}>
                <TextField 
                    color="text"
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    label="Email:"
                    variant="outlined"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 2 }}>
                <TextField 
                    color="text"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    label="Password:"
                    variant="outlined"
                />
            </FormControl>
            <Button fullWidth sx={{ m: 2 }} variant="contained" type="submit">Sign Up</Button>
        </Box>
    )
}

export default Signup