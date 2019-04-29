import { getInitialData } from '../helpers/api'
import { receiveUsers } from '../actions/users'

/**
 * Dispatched when the app loads.
 * Fetches all of the question and user data.
 *
 * @export
 * @returns {Promise} This resolves when the user data is retrieved.
 */
export function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
        })
    }
}
