//action type
export const RECEIVE_USERS = 'RECEIVE_USERS'
//action creator
export function receiveUsers(users){
   return{
        type:RECEIVE_USERS,//DONT FORGET TO TYPE "type:"
        users,
    }

}