import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {saveQuestionAnswer} from '../actions/users'
import PanelTitle from '../components/PanelTitle';

class AnswerQuestion extends Component {

   state =  {
       answer: '',
       id: '',
       answered: false
   }
   changeAnswer =(id, answer) => this.setState(()=>({id, answer}));

   handleSubmit = (e)=>{
       e.preventDefault();
       const { dispatch } = this.props;
       const {answer, id} = this.state;
       dispatch(saveQuestionAnswer(id, answer));
       this.setState({answered: true})
   }
    render() {
    const {  question, user } = this.props;
      const {id, optionOne, optionTwo} = question;
        const {name, avatarURL} = user;
        const {answered} = this.state;
            if(answered){
                this.props.history.push(`${id}`)
            }
        return ( <> 
            {/* { answered ? (<Redirect to={`/questions/${id}`} />):( */}
            <div className="panel w-md">
                <PanelTitle title={`${name} Asks: `} /> 
                <div className="question-detail" key={id}>                    
                                  
                    <div className="user-icon"
                            style={{backgroundImage: `url(${avatarURL})` }} />                               
                        <div className="panel-body h-md">
                            <h2>Would You Rather ...</h2>
                            <div className="flex-inline">
                            <input type="radio" name="answer"  onChange={(e)=>this.changeAnswer(id, e.target.value) } value="optionOne" /> 
                            <label htmlFor="answer"> 
                                {optionOne.text} 
                            </label>
                            </div>
                            <div className="flex-inline">
                                <input type="radio" name="answer" onChange={(e)=>this.changeAnswer(id, e.target.value) } value="optionTwo"/> 
                                <label htmlFor="answer">
                                        {optionTwo.text} 
                                </label>
                            </div>
                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
               
            </div>
            {/* )} */}
        </> 
        )
    }
    
}
const mapStateToProps =({})=> ({})
export default withRouter(connect(mapStateToProps)(AnswerQuestion));