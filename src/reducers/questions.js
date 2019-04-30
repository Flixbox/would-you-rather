import { RECEIVE_QUESTIONS } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
            }
        default:
            return state
    }
}
