import React from  'react';
import PanelTitle from '../components/PanelTitle';
class Signin extends React.Component{
    state = {
        user:''
    }
     handleLogin= (e) => {
        e.preventDefault();
        this.props.history.push("/leaderboard");
    }
    selectUser = (loggedInUser) =>this.setState(()=>({user: loggedInUser}));
    
    render() {
        
        return(       
            <div className="panel">
            <PanelTitle title="Welcome to the Would you Rather App !"/>
            <form className="panel-body" onSubmit={this.handleLogin}>
                <div className="react-redux-icon"></div>
                <h2 className="center"> Signin</h2>
             
                    <select onChange={(e)=>this.selectUser(e.target.value)} value={this.state.user}>     
                        <option disabled>Select User</option>
                        <option value="user one">User One</option>
                        <option value="user Two">User Two</option>
                        <option value="user Three">User Three</option>
                    </select>
                    <button> Submit </button>
            </form>   
          </div>
        )
    }
    
          
    
}
export default Signin;