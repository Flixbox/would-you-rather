import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion } from '../actions/currentQuestion'

class CurrentQuestion extends Component {
    componentDidMount = () => {
        // Always retrieve the current active question from the store
        this.retrieveNewQuestion()
    }

    retrieveNewQuestion = () => {
        const { dispatch, authedUser } = this.props

        dispatch(handleRetrieveNewQuestion(authedUser))
    }

    render() {
        console.log('Current question:', this.props.currentQuestion)
        return <div>Current Question</div>
    }
}

function mapStateToProps({ authedUser, questions, currentQuestion }) {
    return {
        authedUser,
        questions,
        currentQuestion,
    }
}

export default connect(mapStateToProps)(CurrentQuestion)
