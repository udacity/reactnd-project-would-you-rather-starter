import React,{Component} from 'react'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount(){
    //this.props is the store
    this.props.dispatch(handleInitialData())//handleIntialData() is the action
  }

  render(){
    return (
      <div><Dashboard  /></div>
    );
  }

} 

export default connect()(App);
