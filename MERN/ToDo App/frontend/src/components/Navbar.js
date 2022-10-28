import { AppBar, Switch, Toolbar, Typography } from "@mui/material"

const Navbar = ({ theme }) => {

    const handleThemeChange =() => {
        console.log(theme.palette.mode) 
    }


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
                    <h1>ToDo App</h1>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar