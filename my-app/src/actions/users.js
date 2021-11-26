//action type
export const RECEIVE_USERS = 'RECEIVE_USERS'
//action creator
export function receiveUsers(id){
   return{
        RECEIVE_USERS,
        id,
    }

}