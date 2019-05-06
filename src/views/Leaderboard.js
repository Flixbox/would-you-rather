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
        // TODO Sort users
        console.log(users)
        return (
            <Grid container justify="center">
                <List>{Object.keys(users).map(id => this.renderListItem(users[id]))}</List>
            </Grid>
        )
    }

    renderListItem = user => {
        return (
            <ListItem alignItems="flex-start" key={user.id}>
                <ListItemAvatar>
                    <Avatar alt={user.name} src={user.avatarURL} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                    secondary={
                        <Fragment>
                            <Typography component="span">
                                {`${this.getAnsweredQuestions(user)} questions answered`}
                            </Typography>
                            <Typography component="span">
                                {`${this.getAskedQuestions(user)} questions asked`}
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>
        )
    }

    /**
     * Counts how many questions this user has answered.
     *
     * @memberof Leaderboard
     */
    getAnsweredQuestions = user => {
        return 2
    }

    /**
     * Counts how many questions this user has asked.
     *
     * @memberof Leaderboard
     */
    getAskedQuestions = user => {
        return 3
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard)
