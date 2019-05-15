import { handleFilterChange } from './filter'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id = null) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function handleLogin(id, questions) {
    return dispatch => {
        dispatch(setAuthedUser(id))
        dispatch(handleFilterChange({ questions, authedUser: id }))
    }
}

export function handleLogout() {
    return dispatch => {
        dispatch(setAuthedUser())
    }
}
