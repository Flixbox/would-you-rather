import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion, handleQuestionAnswer } from '../actions/questions'

import Question from '../views/Question'

/**
 * This helper view retrieves the current logged in user's question.
 * This question should be the first unanswered one.
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

        return <Question question={currentQuestion} />
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(CurrentQuestion)
