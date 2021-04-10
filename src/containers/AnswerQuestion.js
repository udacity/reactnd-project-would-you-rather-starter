import React, { Component} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';

class AnswerQuestion extends Component {
    //TODO: get question id and recordd answer chosen by a user
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
                                    <input type="radio" name="answer" /> 
                                    <label for="answer"> 
                                        {optionOne.text} 
                                    </label>
                                    </div>
                                    <div className="flex-inline">
                                        <input type="radio" name="answer" /> <label for="answer"> {optionTwo.text} </label>
                                    </div> 
                                    
                                    <button type="submit">Submit</button>
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