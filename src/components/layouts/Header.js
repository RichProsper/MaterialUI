import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Create from '../crud/Create'

const useStyles = makeStyles(theme => ({
    root: { flexGrow: 1, },
    menuButton: { marginRight: theme.spacing(2), },
    title: { flexGrow: 1, },
}))

function Header({ createExercise }) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Exercises <Create createExercise={createExercise} />
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
