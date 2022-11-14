import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { textAlign } from "@mui/system"
import { Link } from "react-router-dom"

const Navbar = () => {

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

                <Typography sx={{ 
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'text-primary'
                            }}>
                    <Link to= "/">
                        <h2>Workout Buddy</h2>
                    </Link>
                </Typography>

                <Link to="/login">
                    <Button color="inherit">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button color="inherit">Signup</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar