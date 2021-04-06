import React from  'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInAction } from '../actions/signInAction';
import PanelTitle from '../components/PanelTitle';

class Signin extends React.Component{
    state = {
        userId:''
    }
     handleLogin= (e) => {
        e.preventDefault();       
        const { dispatch } = this.props;
        dispatch(signInAction(this.state.userId))
        this.props.history.push('/');
    }
    selectUser = (loggedInUserId) =>this.setState(()=>({userId: loggedInUserId}));
     
    render() {
      
        return(       
            <div className="panel">
            <PanelTitle title="Welcome to the Would you Rather App !"/>
            <form className="panel-body" onSubmit={this.handleLogin}>
                <div className="react-redux-icon"></div>
                <h2 className="center"> Signin</h2>
                 
                        <select onChange={(e)=>this.selectUser(e.target.value)}>     
                            <option disabled>Select User</option>
                            {
                                Object.values(this.props.users).map(user =>(
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                        <button type="submit"> Submit </button>
                
                    
            </form>   
          </div>
        )
    }
    
          
    
}
const mapStateToProps =({users})=>({ users});

export default connect(mapStateToProps)(Signin);