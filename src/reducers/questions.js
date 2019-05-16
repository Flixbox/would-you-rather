import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

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
