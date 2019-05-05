import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        textDecoration: 'none',
        color: 'white',
        maxHeight: '100%',
    },
    avatar: {
        maxHeight: '100%',
        float: 'right',
    },
    grow: {
        flexGrow: 1,
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
        const { classes, authedUser, users } = this.props

        const avatarURL = users.users[authedUser.id].avatarURL

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar className={classes.navBar}>
                            <Link to="/" replace className={classes.menuButton}>
                                <Button color="inherit">Would You Rather?</Button>
                            </Link>
                            <Link to="/new" replace className={classes.menuButton}>
                                <Button color="inherit">New Question</Button>
                            </Link>
                            <Link to="/leaderboard" replace className={classes.menuButton}>
                                <Button color="inherit">Leaderboard</Button>
                            </Link>
                            <div className={classes.grow} />
                            <Link to="/profile" replace className={classes.menuButton}>
                                <Button color="inherit">{authedUser.id}</Button>
                                <Avatar alt="avatar" src={avatarURL} className={classes.avatar} />
                            </Link>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser,
    }
}

const StyledNavigation = withStyles(styles)(Navigation)

export default connect(mapStateToProps)(StyledNavigation)
