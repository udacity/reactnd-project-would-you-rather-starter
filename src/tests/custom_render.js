import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';


const renderWithState = (
    ui,{initialState, ...renderOptions} = {}
  )=>{
    const store = createStore(reducer, initialState);
    const Wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    return (ui, {wrapper:Wrapper, ...renderOptions})
  }
  export {renderWithState};