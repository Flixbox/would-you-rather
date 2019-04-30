import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const styles = {
    main: {
        height: '100%',
    },
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
}

class Login extends Component {
    render() {
        const { users } = this.props.users
        const { classes } = this.props

        if (!users) {
            return (
                <Grid container justify="center" className={classes.main}>
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
            <Grid item key={id}>
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

const StyledLogin = withStyles(styles)(Login)

export default connect(mapStateToProps)(StyledLogin)
