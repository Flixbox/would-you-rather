import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const styles = {
    main: {
        height: '100vh',
    },
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
}

/**
 * This container allows the user to select from a list of users.
 * This selection will be stored in the store.
 *
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
    render() {
        const { users } = this.props.users
        const { classes } = this.props

        if (!users) {
            return (
                <Grid container justify="center" alignItems="center" className={classes.main}>
                    <Typography>No users found!</Typography>
                </Grid>
            )
        }

        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.main}
                spacing={32}
            >
                {Object.entries(users).map(([id, user]) => this.renderUser(user))}
            </Grid>
        )
    }

    renderUser = user => {
        const { id } = user
        const { classes } = this.props
        return (
            <Grid item key={id}>
                <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
                <Typography align="center">{user.name}</Typography>
            </Grid>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

const StyledLogin = withStyles(styles)(Login)

export default connect(mapStateToProps)(StyledLogin)
