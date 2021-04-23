import React, { Component} from 'react';
import { connect } from 'react-redux';
import {saveQuestionAnswer} from '../actions/questions'
import PanelTitle from '../components/PanelTitle';
import ResultPage from './ResultPage';

class AnswerQuestion extends Component {

   state =  {
       answer: '',
       id: '',
       answered: false
   }
   changeAnswer =(id, answer) => this.setState(()=>({id, answer}));

   handleSubmit = (e)=>{
       e.preventDefault();
      
       const {answer, id} = this.state;
       this.props.saveQuestionAnswer(id, answer);
       this.setState({answered: true})
   }
    render() {
    const {  question, user,signUser } = this.props;
      const {id, optionOne, optionTwo} = question;
        const {name, avatarURL} = user;
        const {answered} = this.state;
            if(answered){
                return <ResultPage question={question} signUser={signUser} user={user}/>
              
            }
        return ( <> 
            
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
            
        </> 
        )
    }
    
}
// const
const mapDispatchToProps = dispatch => ({
    saveQuestionAnswer: (id, answer) => dispatch(saveQuestionAnswer(id, answer))
})
export default connect(null, mapDispatchToProps)(AnswerQuestion);