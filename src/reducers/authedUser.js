import { SET_AUTHED_USER } from '../actions/authedUser'

export default (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                id: action.id,
            }
        default:
            return state
    }
}
