import React, { Component} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';

class AnswerQuestion extends Component {
    //TODO: get question id and recordd answer chosen by a user
    render() {
        const {signUser,question, name} = this.props; 
        
        return(         
            <div className="panel w-md">
                {  Object.values(question).map(({author, optionOne, optionTwo})=>(

                        <>
                            <PanelTitle title={`${author} Asks `} /> 
                            <div className="question-detail">                    
                                <div alt="user icon" className="user-icon"
                                        style={{backgroundImage: `url(${''})` }} />                                
                                
                                
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
//const mapStateToProps = (signUser, users, questions)=>({signUser, users, questions});
function mapStateToProps({signUser, users, questions},{questionId}){
    const question = Object.values(questions).filter(({id})=>id === questionId)
    console.log(JSON.stringify(question))
    return {signUser, users, question};
}
export default connect(mapStateToProps)(AnswerQuestion);