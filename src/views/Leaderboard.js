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

/**
 * This view simply displays the user's stats.
 * All users are ordered by the sum of their questions and answers.
 *
 * @class Leaderboard
 * @extends {Component}
 */
class Leaderboard extends Component {
    render() {
        const { users } = this.props
        const sortedUsers = this.getSortedUsers(users)
        return (
            <Grid container justify="center">
                <List>{sortedUsers.map(user => this.renderListItem(user))}</List>
            </Grid>
        )
    }

    /**
     * This function renders the stats of a single user.
     *
     * @memberof Leaderboard
     */
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
     * Sorts the user array by the sum of their questions and answers.
     *
     * @memberof Leaderboard
     */
    getSortedUsers = users => {
        let sortedUsers = []
        Object.keys(users).map(id => sortedUsers.push(users[id]))
        return sortedUsers.sort((a, b) => this.getUserScore(b) - this.getUserScore(a))
    }

    /**
     * Adds up the user's questions and answers.
     *
     * @memberof Leaderboard
     */
    getUserScore = user => {
        let sum = 0
        sum += this.getAskedQuestions(user)
        sum += this.getAnsweredQuestions(user)
        return sum
    }

    /**
     * Counts how many questions this user has answered.
     *
     * @memberof Leaderboard
     */
    getAnsweredQuestions = user => {
        return Object.keys(user.answers).length
    }

    /**
     * Counts how many questions this user has asked.
     *
     * @memberof Leaderboard
     */
    getAskedQuestions = user => {
        return user.questions.length
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard)
