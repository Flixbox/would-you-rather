import { RECEIVE_QUESTIONS, RETRIEVE_NEW_QUESTION } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
            }
        case RETRIEVE_NEW_QUESTION:
            for (const key in state.questions) {
                const question = state.questions[key]
                // Concatenate the two arrays to get all votes of the question
                const votes = question.optionOne.votes.concat(question.optionTwo.votes)
                // Find the first question where the user hasn't voted
                let hasVoted = false
                for (const key in votes) {
                    if (votes[key] === action.authedUser.id) {
                        hasVoted = true
                    }
                }
                if (!hasVoted) {
                    return {
                        ...state,
                        currentQuestion: key,
                    }
                }
            }
            return {
                ...state,
                currentQuestion: null,
            }
        default:
            return state
    }
}
