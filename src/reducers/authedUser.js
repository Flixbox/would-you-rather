import { SET_AUTHED_USER } from '../actions/authedUser'

export default (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                ...action.user,
            }
        default:
            return state
    }
}
