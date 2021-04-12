import React, { Component} from 'react';
import { connect } from 'react-redux';
import {saveQuestionAnswer} from '../actions/questions'
import PanelTitle from '../components/PanelTitle';

class AnswerQuestion extends Component {
    /*TODO: vote for a question 
        1. add question to user votes and
        2. use save answer from api.js
    */
   state =  {
       answer: '',
       id: '',
   }
   changeAnswer =(id, answer) =>this.setState(()=>({id, answer}));
   
   
   handleSubmit = (e)=>{
       e.preventDefault();

       const { dispatch } = this.props;
       const {answer, id} = this.state;
       dispatch(saveQuestionAnswer(id, answer));
      
   }
    render() {
        const {signUser,question, user} = this.props; 
      
        const {name, avatarURL} = Object.values(user)[0];
        return(         
            <div className="panel w-md">
                {  Object.values(question).map(({id, optionOne, optionTwo})=>(

                        <>  
                            <PanelTitle title={`${name} Asks `} /> 
                            <div className="question-detail">                    
                                <div alt="user icon" className="user-icon"
                                        style={{backgroundImage: `url(${avatarURL})` }} />                                
                                
                                
                                <div className="panel-body h-md">
                                    
                                        <h2>Would You Rather ...</h2>
                                        <div className="flex-inline">
                                        <input type="radio" name="answer"  onChange={(e)=>this.changeAnswer(id, e.target.value) } value="optionOne" /> 
                                        <label for="answer"> 
                                            {optionOne.text} 
                                        </label>
                                        </div>
                                        <div className="flex-inline">
                                            <input type="radio" name="answer" onChange={(e)=>this.changeAnswer(id, e.target.value) } value="optionTwo"/> 
                                            <label for="answer">
                                                 {optionTwo.text} 
                                            </label>
                                        </div>
                                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
                                   
                                </div>
                            </div>
                        </>
                    ))    
                    
                
                }
            </div>
         )
    }
    
}

function mapStateToProps({signUser, users, questions},{questionId}){
    const question = Object.values(questions).filter(({id})=>id === questionId)
    const user = Object.values(users).map(user =>{
        if(user.questions.find((question)=>question === questionId )){            
            return user
                
        }
    }).filter(x=>x !== undefined); // all question belongs are retrieved with null as value for the questions which doesn't match the condition so this line skipps null values

    return {signUser, user, question};
}
export default connect(mapStateToProps)(AnswerQuestion);