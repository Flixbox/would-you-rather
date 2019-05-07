export const SET_FILTER = 'SET_FILTER'

export function setFilter(id = 1) {
    return {
        type: SET_FILTER,
        id,
    }
}

export function handleFilterChange(id = 1) {
    return dispatch => {
        dispatch(setFilter(id))
    }
}
