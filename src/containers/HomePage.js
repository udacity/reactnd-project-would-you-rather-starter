import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';
import Question from '../components/Question';

function HomePage(props){
    const { questions, users }= props;
   
    const answeredQuestion = Object.values(questions).filter((question) => question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !==0 );
    const unAnsweredQuestion = Object.values(questions).filter((question) => question.optionOne.votes.length === 0 || question.optionTwo.votes.length ===0 );

    return(
        <div className="panel-lg w-md" style={{height: '100vh'}}> 
            <div className="leader-title">
                <div>Unanswered Question</div> <div>Answered Question</div> 
            </div>          
            <Question questions={answeredQuestion} users={Object.values(users)} />
            <Question questions={unAnsweredQuestion} users={Object.values(users)} />
                
        </div>
    )
}
//const mapStateToProps =({questions, users, signUser}) =>({questions, users, signUser});
function mapStateToProps({questions, users, signUser}){
    console.log('questions',Object.values(questions));
    //let test to print text of the option one

    return {questions, users, signUser};
}
export default connect(mapStateToProps)(HomePage);