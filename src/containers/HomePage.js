// TODO: ENABLE TOGGLE BETWEEN ANSWERED AND NOT ANSWERED QUESTION
// FILTER QUESTION AND SHOW ANSWERED QUESTIONS BY SIGNEDIN USER INTO ANSWERED COMPONENT ✅

import { connect } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';
import Question from '../components/Question';
import Signin from './Signin';

function HomePage(props){
    const { questions, users, signUser }= props;
   
    const answeredQuestion = Object.values(questions).filter((question) =>{
       return (question.optionOne.votes && question.optionOne.votes.find(vote => vote === signUser)) || 
                (question.optionTwo.votes && question.optionTwo.votes.find(vote => vote === signUser))
    });
    const notAnsweredQuestion = Object.values(questions).filter((question) =>{
        return (!question.optionOne.votes && question.optionOne.votes.find(vote => vote !== signUser)) || 
                 (!question.optionTwo.votes && question.optionTwo.votes.find(vote => vote !== signUser))
     });
     alert(JSON.stringify(notAnsweredQuestion));
    if(!signUser.length){
    return <Signin />
   }
 
    return( 
        

        <div className="panel-lg w-md"> 
            <div className="leader-title">

                <Link to="/unanswered">
                    Unanswered Question
                </Link> 
                <Link to="/answered">
                    Answered Question
                </Link> 
                
            </div>   
            <Question questions={answeredQuestion} users={Object.values(users)} className="answered" />
            
           
                
        </div>
         

    )
}
//const mapStateToProps =({questions, users, signUser}) =>({questions, users, signUser});
function mapStateToProps({questions, users, signUser}){
    console.log('questions',Object.values(questions));
    //let test to print text of the option one
   // alert(JSON.stringify(signUser))

    return {questions, users, signUser};
}
export default connect(mapStateToProps)(HomePage);