import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion } from '../actions/questions'

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
        console.log('Current question:', currentQuestion)
        return <div>Current Question</div>
    }
}

function mapStateToProps({ authedUser, questions, currentQuestion }) {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(CurrentQuestion)
