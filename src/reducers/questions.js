import {
    RECEIVE_QUESTIONS,
    RETRIEVE_NEW_QUESTION,
    SAVE_QUESTION_ANSWER,
    RETRIEVE_FILTERED_QUESTIONS,
} from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    ...action.questions,
                },
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
        case RETRIEVE_FILTERED_QUESTIONS: {
            const { questions, filter, authedUser } = action
            let sortedQuestions = []
            for (const question in questions) {
                const votes = [
                    ...questions[question].optionOne.votes,
                    ...questions[question].optionTwo.votes,
                ]

                switch (filter) {
                    case 0:
                        // No filter
                        sortedQuestions.push(questions[question])
                        break
                    case 2:
                        // Answered only
                        if (votes.includes(authedUser.id)) {
                            sortedQuestions.push(questions[question])
                        }
                        break
                    default:
                        // Unanswered only
                        if (!votes.includes(authedUser.id)) {
                            sortedQuestions.push(questions[question])
                        }
                        break
                }
            }
            sortedQuestions.sort((a, b) => {
                return b.timestamp - a.timestamp
            })
            return sortedQuestions
        }
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action

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
