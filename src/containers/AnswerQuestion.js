import React, { Component} from 'react';
import {saveQuestionAnswer} from '../actions/users'
import PanelTitle from '../components/PanelTitle';

class AnswerQuestion extends Component {

   state =  {
       answer: '',
       id: '',
   }
   changeAnswer =(id, answer) => this.setState(()=>({id, answer}));

   handleSubmit = (e)=>{
       e.preventDefault();
       const { dispatch } = this.props;
       const {answer, id} = this.state;
       dispatch(saveQuestionAnswer(id, answer));
      
   }
    render() {
    const {  question, user } = this.props;
      const {id, optionOne, optionTwo} = question;
        const {name, avatarURL} = user;

        return (
            <div className="panel w-md">
                <PanelTitle title={`${name} Asks `} /> 
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
           
        )
    }
    
}

export default AnswerQuestion;