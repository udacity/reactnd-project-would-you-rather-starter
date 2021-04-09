// TODO: ENABLE TOGGLE BETWEEN ANSWERED AND NOT ANSWERED QUESTION
// FILTER QUESTION AND SHOW ANSWERED QUESTIONS BY SIGNEDIN USER INTO ANSWERED COMPONENT ✅

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link,useLocation } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';
import Question from '../components/Question';
import Signin from './Signin';

class HomePage extends Component {
    state = {
        toggle: false
    }

    handleToggle =()=>this.setState(() => ({ toggle: !this.state.toggle }))

    render() {
        const { toggle } = this.state;
    const { questions, users, signUser }= this.props;
   
    const answeredQuestion = Object.values(questions).filter((question) =>{
       return (question.optionOne.votes && question.optionOne.votes.find(vote => vote === signUser)) || 
                (question.optionTwo.votes && question.optionTwo.votes.find(vote => vote === signUser))
    });
    const notAnsweredQuestion = Object.values(questions).filter((question) =>{
        return (question.optionOne.votes.find(vote => vote !== signUser)) || 
                 (question.optionTwo.votes.find(vote => vote !== signUser))
     });
     
    if(!signUser.length){
    return <Signin />
   }
 
    return( 

        <div className="panel-lg w-md"> 
            <div className="leader-title">

                <div onClick={this.handleToggle}>
                    Unanswered Question
                </div> 
                <div onClick={this.handleToggle}>
                    Answered Question
                </div> 
                
            </div>  
              {  toggle ? <Question questions={answeredQuestion} users={Object.values(users)}/>  :
                 <Question questions={notAnsweredQuestion} users={Object.values(users)} />
             }
        </div>
         

    )
}
}
//const mapStateToProps =({questions, users, signUser}) =>({questions, users, signUser});
function mapStateToProps({questions, users, signUser}){
    console.log('questions',Object.values(questions));
    //let test to print text of the option one
   // alert(JSON.stringify(signUser))

    return {questions, users, signUser};
}

export default connect(mapStateToProps)(HomePage);