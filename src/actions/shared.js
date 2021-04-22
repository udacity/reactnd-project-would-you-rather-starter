import { initialData } from '../utils/api';
import { fetchUsers } from './users';
import { fetchQuestions } from './questions';

export const getInitialData = () => (dispatch) => {
    
    return initialData().then(({users, questions})=>{  
           
        dispatch(fetchUsers(users))
        dispatch(fetchQuestions(questions))
    }).catch(err =>console.log(err))

}