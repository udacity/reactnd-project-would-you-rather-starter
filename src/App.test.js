import React from "react";

import {users, questions} from './utils/_DATA';

import { MyApp } from './App';

import { renderWithState } from "./tests/custom_render";

// jest.mock("/", () => {
// //getinitialState: () =>({users})
// });
const initialState = {users, questions, authedUser: 'tylermcginnis'};



test('renders learn react link', () => {
  renderWithState(<MyApp />,initialState );

  //w\ expect(screen.getByText('Home')).toBeInTheDocument();
  // expect(screen.getByText('New Question')).toBeInTheDocument();
  // expect(screen.getByText('Leader Board')).toBeInTheDocument();
  // expect(screen.getByText('Hello')).toBeInTheDocument();
  // fireEvent.click(screen.getByText('Logout'));
});