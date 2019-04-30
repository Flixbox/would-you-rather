import { RETRIEVE_NEW_QUESTION } from '../actions/currentQuestion'

export default (state = {}, action) => {
    console.log('Reducing to testing question!')
    switch (action.type) {
        case RETRIEVE_NEW_QUESTION:
            return {
                ...state,
                currentQuestion: 'test',
            }
        default:
            return state
    }
}
