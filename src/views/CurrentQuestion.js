import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { Typography, Grid } from '@material-ui/core'

/**
 * This helper view retrieves the current logged in user's question.
 * This question should be the first unanswered one or a different one depending on the filter.
 * It's basically just a redirect.
 *
 * @class CurrentQuestion
 * @extends {Component}
 */
class CurrentQuestion extends Component {
    render() {
        const { filteredQuestions } = this.props

        if (!filteredQuestions) {
            return (
                <Grid container justify="center" alignItems="center">
                    <Typography variant="h1">Loading question...</Typography>
                </Grid>
            )
        }

        return <Redirect to={`questions/${filteredQuestions[0]}`} />
    }
}

function mapStateToProps({ authedUser, filteredQuestions }) {
    return {
        authedUser,
        filteredQuestions,
    }
}

export default connect(mapStateToProps)(CurrentQuestion)
