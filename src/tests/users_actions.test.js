import * as actions from '../actions/users';
import * as constants from '../constants/index'
describe('fetch user', () =>{
    it('should fetch users', () =>{
        const users = {
            sarahedo: {
                id: 'sarahedo',
                name: 'Sarah Edo',
                avatarURL:'/icons/user1.jpg' ,
                answers: {
                  "8xf0y6ziyjabvozdd253nd": 'optionOne',
                  "6ni6ok3ym7mf1p33lnez": 'optionTwo',
                  "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                  "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
              },
              tylermcginnis: {
                id: 'tylermcginnis',
                name: 'Tyler McGinnis',
                avatarURL:'/icons/user2.jpg' ,
                answers: {
                  "vthrdm985a262al8qx3do": 'optionOne',
                  "xj352vofupe1dqz9emx13r": 'optionTwo',
                },
                questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
              },
              johndoe: {
                id: 'johndoe',
                name: 'John Doe',
                avatarURL:'/icons/user3.jpg',
                answers: {
                  "xj352vofupe1dqz9emx13r": 'optionOne',
                  "vthrdm985a262al8qx3do": 'optionTwo',
                  "6ni6ok3ym7mf1p33lnez": 'optionTwo'
                },
                questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
              }
        }
        const expectedAction = {
            type: constants.FETCH_USERS,
            users
        }
        console.log(actions.fetchUsers(users))
       // expect(actions.fetchUsers(users)).toEqual(expectedAction)
    })
})
describe('add question',()=>{
    it('should add question', ()=>{
        const question ={type:constants.SAVE_QUESTION,
          } 
    })
})