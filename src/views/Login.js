import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const styles = {
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
}

class Login extends Component {
    render() {
        let { users } = this.props.users

        if (!users) {
            return (
                <Grid container justify="center">
                    <Typography>No users found!</Typography>
                </Grid>
            )
        }

        return (
            <Grid container justify="center">
                {Object.entries(users).map(([id, user]) => this.renderUser(user))}
            </Grid>
        )
    }

    renderUser = user => {
        const { id } = user
        const { classes } = this.props
        return (
            <Grid item xs={12} m={6} l={3} key={id}>
                <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
            </Grid>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))
