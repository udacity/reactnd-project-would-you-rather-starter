import React from 'react';
import { Login } from './Login';
import ConnectedLogin from './Login';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import { receiveUsers } from '../actions';

describe('with a list of users', () => {
  const users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo'
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis'
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe'
    },
  };

  test('is a connected component', () => {
    const store = createStore(reducer);
    store.dispatch(receiveUsers(users));
    const { getByTestId } = render(
      <Provider store={store}>
        <ConnectedLogin/>
      </Provider>
    );

    getByTestId('default');
    getByTestId('sarahedo');
    getByTestId('tylermcginnis');
    getByTestId('johndoe');
  });

  test('displays a Login control with the list of Users', () => {
    const { getByTestId } = render(
        <Login users={users}/>
    );
    getByTestId('default');
    getByTestId('sarahedo');
    getByTestId('tylermcginnis');
    getByTestId('johndoe');
  });

  describe('when User Tyler McGinnis is selected', () => {
    test('sets Tyler McGinnis as the selected user', () => {
      const { getByDisplayValue, getByLabelText } = render(<Login users={users}/>);
      fireEvent.change(getByLabelText('Login'), { target: { value: 'tylermcginnis'}});

      getByDisplayValue('Tyler McGinnis')
    });

    test('allows a User to login as Tyler McGinnis', () => {
      const onLoginHandler = jest.fn((user) => user);
      const { getByLabelText } = render(<Login users={users} onLogin={onLoginHandler}/>);
      fireEvent.change(getByLabelText('Login'), { target: { value: 'tylermcginnis'}});
      fireEvent.submit(getByLabelText('Login'));

      expect(onLoginHandler.mock.calls).toEqual([['tylermcginnis']]);
    });
  });
});
