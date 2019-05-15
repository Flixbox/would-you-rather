import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Avatar, Grid } from '@material-ui/core'

import { handleLogin } from '../actions/authedUser'

const styles = {
    main: {
        height: '100vh',
        maxWidth: '100vw',
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
    handleLoginClick = id => {
        const { dispatch, questions } = this.props

        dispatch(handleLogin(id, questions.questions))
    }

    render() {
        const { users, classes } = this.props

        if (!users) {
            return (
                <Grid container justify="center" alignItems="center" className={classes.main}>
                    <Typography>Loading users...</Typography>
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
                <Button onClick={() => this.handleLoginClick(id)}>
                    <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
                    <Typography align="center">{user.name}</Typography>
                </Button>
            </Grid>
        )
    }
}

function mapStateToProps({ users, questions }) {
    return {
        users,
        questions,
    }
}

const StyledLogin = withStyles(styles)(Login)

export default connect(mapStateToProps)(StyledLogin)
