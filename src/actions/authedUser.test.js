import { setAuthedUser, SET_AUTHED_USER } from './authedUser'

const userId = 'catherinegregory'
it('receives user id', () => {
    expect(setAuthedUser(userId)).toEqual({
        type: SET_AUTHED_USER,
        id: userId,
    })
})
