import {
    RECEIVE_QUESTIONS,
    RETRIEVE_NEW_QUESTION,
    SAVE_QUESTION_ANSWER,
} from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            let questionArray = []
            for (const question in action.questions) {
                questionArray.push(action.questions[question])
            }
            questionArray.sort((a, b) => {
                return a.timestamp - b.timestamp
            })
            return {
                ...state,
                questions: questionArray,
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
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action

            // This is basically stolen from the _DATA.js code
            const questions = {
                ...state.questions,
                [qid]: {
                    ...state.questions[qid],
                    [answer]: {
                        ...state.questions[qid][answer],
                        votes: state.questions[qid][answer].votes.concat([authedUser]),
                    },
                },
            }
            return {
                ...state,
                questions: { ...questions },
            }
        default:
            return state
    }
}