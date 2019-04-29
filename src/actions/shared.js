import { getInitialData } from '../helpers/api'
import { receiveUsers } from '../actions/users'

export function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
        })
    }
}
