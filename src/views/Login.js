import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

class Login extends Component {
    render() {
        let { users } = this.props.users
        console.log(this.props)

        if (!users) {
            return (
                <Grid container justify="center">
                    <Typography>No users found!</Typography>
                </Grid>
            )
        }

        return (
            <Grid container justify="center">
                {Object.entries(users).map(([id, user]) => (
                    <Grid item xs={12} m={6} l={3}>
                        {user.name}
                    </Grid>
                ))}
            </Grid>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Login)
