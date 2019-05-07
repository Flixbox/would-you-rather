import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion } from '../actions/questions'

import { Redirect } from 'react-router-dom'

import { Typography, Grid } from '@material-ui/core'

/**
 * This helper view retrieves the current logged in user's question.
 * This question should be the first unanswered one.
 * It's basically just a redirect.
 *
 * @class CurrentQuestion
 * @extends {Component}
 */
class CurrentQuestion extends Component {
    componentDidMount = () => {
        const { currentQuestion } = this.props.questions

        if (!currentQuestion) {
            this.retrieveNewQuestion()
        }
    }

    retrieveNewQuestion = () => {
        const { dispatch, authedUser } = this.props

        dispatch(handleRetrieveNewQuestion(authedUser))
    }

    render() {
        const { currentQuestion } = this.props.questions

        if (!currentQuestion) {
            return (
                <Grid container justify="center" alignItems="center">
                    <Typography variant="h1">Loading question...</Typography>
                </Grid>
            )
        }

        return <Redirect to={`questions/${currentQuestion}`} />
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(CurrentQuestion)
