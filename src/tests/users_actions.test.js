import * as actions from '../actions/users';
import * as constants from '../constants/index'
import {users, questions} from '../utils/_DATA';

describe('fetch user', () =>{
    it('should fetch users', () =>{
        
        const expectedAction = {
            type: constants.FETCH_USERS,
            users
        }
        console.log(actions.fetchUsers(users))
        //expect(actions.fetchUsers(users)).toEqual(expectedAction)
    })
})
describe('add question',()=>{
    it('should add question', ()=>{
        const question ={type:constants.SAVE_QUESTION,
          } 
    })
})