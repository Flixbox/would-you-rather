import { SET_FILTER } from '../actions/filter'

export default (state = {}, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.id
        default:
            return state
    }
}
