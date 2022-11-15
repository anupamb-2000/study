import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { Logout } from "@mui/icons-material"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <AppBar position="sticky" color="secondary">
            <Toolbar>
                {/* <Typography 
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'text-primary',
                        textDecoration: 'none',
                        flexGrow: 1
                      }}>
                    <Link to="/">
                        <h1>Workout Buddy</h1>
                    </Link> 
                </Typography> */}

                <Typography component={'span'}
                            sx={{ 
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'text-primary'
                            }}>
                    <Link to= "/">
                        <h2>Workout Buddy</h2>
                    </Link>
                </Typography>

                {user && (
                    <Box component={'div'}>
                        <Typography sx={{m: 2}} variant='subtitle2' component={'span'}>{user.email}</Typography>
                        <IconButton color="primary" onClick={handleClick}>
                            <Logout />
                        </IconButton>
                    </Box>
                )}

                {!user && (
                    <Box component={'div'}>
                        <Link to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button color="inherit">Signup</Button>
                        </Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar