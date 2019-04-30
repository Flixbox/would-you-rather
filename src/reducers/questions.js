import { RECEIVE_QUESTIONS, RETRIEVE_NEW_QUESTION } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
            }
        case RETRIEVE_NEW_QUESTION:
            return {
                ...state,
                currentQuestion: 'test',
            }
        default:
            return state
    }
}
