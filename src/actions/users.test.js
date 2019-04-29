import { receiveUsers, RECEIVE_USERS } from './users'

const exampleUserData = {
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
}
it('receives users', () => {
    expect(receiveUsers(exampleUserData)).toEqual({
        type: RECEIVE_USERS,
        users: exampleUserData,
    })
})
