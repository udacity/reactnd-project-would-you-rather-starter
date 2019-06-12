import React from 'react';
import { App } from './App';
import ConnectedApp from './App';
import { wait, fireEvent, render } from '@testing-library/react';
import { createStore } from 'redux';
import reducers from './reducers';
import { receiveUsers } from './actions';
import Provider from 'react-redux';

test('displays a Login control', async () => {
  const store = createStore(reducers);
  store.dispatch(receiveUsers({}));
  // const { getByText, getByLabelText, findByTestId } = render(<App store={store}></App>);
  const { getByText, getByLabelText, findByTestId } = render(<Provider store={store}><ConnectedApp/></Provider>);
  await wait(() => findByTestId('sarahedo'));
  const loginForm = getByLabelText('Login');
  fireEvent.change(loginForm, { target: { value: 'sarahedo'}});
  fireEvent.submit(loginForm);
  getByText('Logged In: sarahedo');
});
