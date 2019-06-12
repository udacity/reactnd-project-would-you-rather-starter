import userReducer from './users';
import { receiveUsers } from '../actions';

describe('an undefined previous state', () => {
  test('it returns an empty object', () => {
    const previousState = undefined;
    const action = { type: 'OTHER' };
    expect(userReducer(previousState, action)).toMatchObject({});
  });
});

describe('with an unhandled action', () => {
  test('it returns the previous state', () => {
    const previousState = { previousState: {} };
    const action = { type: 'OTHER' };
    expect(userReducer(previousState, action)).toMatchObject({
      previousState: {}
    });
  });
});

describe('with action RECEIVE_USERS', () => {
  test('it adds the users to the previous state', () => {
    const previousState = { previousState: {} };
    const users = {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo'
      }
    };
    const action = receiveUsers(users);

    expect(userReducer(previousState, action)).toMatchObject({
      previousState: {},
      users: {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo'
        }
      }
    });
  });
});
