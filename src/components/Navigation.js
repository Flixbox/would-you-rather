import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        // Fix height for absolute positioning
        height: `${theme.custom.navbarHeight}px`,
        minHeight: `${theme.custom.navbarHeight}px`,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        textDecoration: 'none',
        color: 'white',
    },
})

/**
 * This element represents the top navigation of the application.
 *
 * @class Navigation
 * @extends {Component}
 */
class Navigation extends Component {
    render() {
        const { classes } = this.props

        return (
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.root}>
                    <Link to="/" replace className={classes.menuButton}>
                        <Button color="inherit">Would You Rather?</Button>
                    </Link>
                    <Link to="/new" replace className={classes.menuButton}>
                        <Button color="inherit">New Question</Button>
                    </Link>
                    <Link to="/leaderboard" replace className={classes.menuButton}>
                        <Button color="inherit">Leaderboard</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navigation)
