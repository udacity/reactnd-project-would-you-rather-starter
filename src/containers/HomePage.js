// TODO: ENABLE TOGGLE BETWEEN ANSWERED AND NOT ANSWERED QUESTION
// FILTER QUESTION AND SHOW ANSWERED QUESTIONS BY SIGNEDIN USER INTO ANSWERED COMPONENT ✅

import { connect } from 'react-redux';
import { Link,useLocation } from 'react-router-dom';
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
        return (question.optionOne.votes.find(vote => vote !== signUser)) || 
                 (question.optionTwo.votes.find(vote => vote !== signUser))
     });
     
    if(!signUser.length){
    return <Signin />
   }
 
    return( 

        <div className="panel-lg w-md"> 
            <div className="leader-title">

                <Link from='/answered' to="/unanswered">
                    Unanswered Question
                </Link> 
                <Link from='/unanswered' to="/unanswered">
                    Answered Question
                </Link> 
                
            </div>  
             {/*answered questions  */}
             
                <Question questions={answeredQuestion} users={Object.values(users)}/>            
                {/* unanswered questions */}
                <Question questions={notAnsweredQuestion} users={Object.values(users)} />

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