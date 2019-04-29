import usersReducer from './users'
import { RECEIVE_USERS } from '../actions/users'

const exampleState = {
    questions: {
        '8xf0y6ziyjabvozdd253nd': {
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'catherinegregory',
            timestamp: 1467166872634,
            optionOne: {
                votes: ['catherinegregory'],
                text: 'have horrible short term memory',
            },
            optionTwo: {
                votes: [],
                text: 'have horrible long term memory',
            },
        },
        '6ni6ok3ym7mf1p33lnez': {
            id: '6ni6ok3ym7mf1p33lnez',
            author: 'danoliver',
            timestamp: 1468479767190,
            optionOne: {
                votes: [],
                text: 'become a superhero',
            },
            optionTwo: {
                votes: ['danoliver', 'catherinegregory'],
                text: 'become a supervillain',
            },
        },
    },
}
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

it('reduces users with state', () => {
    expect(usersReducer(exampleState, receiveUsersAction)).toEqual({
        users: receiveUsersAction.users,
        ...exampleState,
    })
})

it('handles invalid action with state', () => {
    expect(usersReducer(exampleState, otherAction)).toEqual(exampleState)
})

it('reduces users without state', () => {
    expect(usersReducer(null, receiveUsersAction)).toEqual({
        users: receiveUsersAction.users,
    })
})

it('handles invalid action without state', () => {
    expect(usersReducer(null, otherAction)).toEqual(null)
})
