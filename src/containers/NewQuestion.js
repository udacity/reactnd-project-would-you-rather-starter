
import React from  'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveQuestion } from '../actions/questions';
import PanelTitle from '../components/PanelTitle';

class NewQuestion extends React.Component{
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

   handleSubmit =(e) =>{
    e.preventDefault();
  

   const { dispatch } = this.props;
   const {optionOneText, optionTwoText} = this.state;
   dispatch(saveQuestion({ optionOneText, optionTwoText}))
   this.props.history.push("/");
  }

  handleOptionOneChange =(optionOneText)=>this.setState(()=>({optionOneText}));
  handleOptionTwoChange =(optionTwoText)=>this.setState(()=>({optionTwoText}));
    

  render(){
    if(!this.props.signUser.length){
      this.props.history.push("/");
    }
    return(
       
      <form onSubmit={this.handleSubmit} id='form-data'>
        <div className="panel">
          <PanelTitle title="New Question"/>
          <div className="panel-body">
          <label> Complete the question</label>
          <h1>Would You Rather...</h1>
            <input type="text" 
                placeholder="Enter Option 1 Here" 
                name="optionOneText" 
                value={this.state.optionOneText}
                onChange={(e)=>this.handleOptionOneChange(e.target.value)}
                />
               <h2>OR</h2>            
            <input type="text" 
                placeholder="Enter Option 2 Here" 
                name="optionTwoText" 
                value={this.state.optionTwoText}
                onChange={(e)=>this.handleOptionTwoChange(e.target.value)}
                />
            <button type="submit"> Submit </button>
          </div>
        </div>
      </form>
        
    )
  }
    
}
const mapStateToProps =({signUser})=>({ signUser})
export default withRouter(connect(mapStateToProps)(NewQuestion));