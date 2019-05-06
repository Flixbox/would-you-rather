import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar, Avatar, Menu, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleLogout } from '../actions/authedUser'
import { handleFilterChange } from '../actions/filter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

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
    state = {
        anchorEl: null,
    }

    filterTexts = ['All questions', 'Unanswered', 'Answered']

    handleLogoutClick = () => {
        const { dispatch } = this.props

        dispatch(handleLogout())
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = id => {
        const { dispatch } = this.props
        this.setState({ anchorEl: null })
        console.log(id)
        dispatch(handleFilterChange(id))
    }

    render() {
        const { classes, authedUser, users, filter } = this.props
        const { anchorEl } = this.state

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
                            <Button
                                aria-owns={anchorEl ? 'filter-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                                className={classes.menuButton}
                            >
                                {this.filterTexts[filter] || 'Filter'}
                            </Button>
                            <Menu
                                id="filter-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                {this.filterTexts.map((text, id) => (
                                    <MenuItem onClick={() => this.handleClose(id)} key={text}>
                                        {text}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Link to="/profile" replace className={classes.menuButton}>
                                <Button color="inherit">{authedUser.id}</Button>
                                <Avatar alt="avatar" src={avatarURL} className={classes.avatar} />
                            </Link>
                            <Button color="inherit" onClick={() => this.handleLogoutClick()}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, filter }) {
    return {
        users,
        authedUser,
        filter,
    }
}

const StyledNavigation = withStyles(styles)(Navigation)

export default connect(mapStateToProps)(StyledNavigation)
