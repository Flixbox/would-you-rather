import usersReducer from './users'
import { RECEIVE_USERS } from '../actions/users'

const user = 'catherinegregory'

const receiveUsersAction = {
    type: RECEIVE_USERS,
    users: {
        catherinegregory: {
            id: 'catherinegregory',
            name: 'Catherine Gregory',
            avatarURL: 'https://randomuser.me/api/portraits/women/82.jpg',
            answers: {
                '8xf0y6ziyjabvozdd253nd': 'optionOne',
                '6ni6ok3ym7mf1p33lnez': 'optionTwo',
                am8ehyc8byjqgar0jgpub9: 'optionTwo',
                loxhs1bqm25b708cmbf3g: 'optionTwo',
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
        },
    },
}
const otherAction = {
    type: 'OTHER',
    users: 'foo',
}

it('reduces users', () => {
    expect(usersReducer(null, receiveUsersAction)).toEqual({
        ...receiveUsersAction.users,
    })
})

it('handles invalid action', () => {
    expect(usersReducer(null, otherAction)).toEqual(null)
})
