import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
} from '@material-ui/core'

class Leaderboard extends Component {
    render() {
        const { users } = this.props.users
        console.log(users)
        return (
            <Grid container>
                <List>{Object.keys(users).map(id => this.renderListItem(users[id]))}</List>
            </Grid>
        )
    }

    renderListItem = user => {
        return (
            <ListItem alignItems="flex-start" key={user.id}>
                <ListItemAvatar>
                    <Avatar alt={user.id} src={user.avatarURL} />
                </ListItemAvatar>
            </ListItem>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard)
