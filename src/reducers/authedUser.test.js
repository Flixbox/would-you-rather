import authedUserReducer from './authedUser'
import { SET_AUTHED_USER } from '../actions/authedUser'

const exampleState = {
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
const authenticationAction = {
    type: SET_AUTHED_USER,
    id: 'catherinegregory',
}
const otherAction = {
    type: 'OTHER',
    id: 'foo',
}

it('reduces authenticated user with state', () => {
    expect(authedUserReducer(exampleState, authenticationAction)).toEqual({
        ...exampleState,
        id: 'catherinegregory',
    })
})

it('handles invalid action with state', () => {
    expect(authedUserReducer(exampleState, otherAction)).toEqual(exampleState)
})

it('reduces authenticated user without state', () => {
    expect(authedUserReducer(null, authenticationAction)).toEqual({
        id: 'catherinegregory',
    })
})

it('handles invalid action without state', () => {
    expect(authedUserReducer(null, otherAction)).toEqual(null)
})
