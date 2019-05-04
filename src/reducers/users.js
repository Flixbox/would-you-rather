import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action
            // This is basically stolen from the _DATA.js code
            const users = {
                ...state.users,
                [authedUser]: {
                    ...state.users[authedUser],
                    answers: {
                        ...state.users[authedUser].answers,
                        [qid]: answer,
                    },
                },
            }
            return {
                ...state,
                ...users,
            }
        default:
            return state
    }
}
