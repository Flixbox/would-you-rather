import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action
            // This is basically stolen from the _DATA.js code
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                },
            }
        default:
            return state
    }
}
