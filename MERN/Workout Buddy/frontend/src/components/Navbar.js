import { AppBar, Toolbar, Typography } from "@mui/material"

const Navbar = () => {

    return (
        <AppBar position="sticky" color="secondary">
            <Toolbar>
                <Typography 
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'text-primary',
                        textDecoration: 'none',
                      }}>
                    <h1>Workout Buddy</h1>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar