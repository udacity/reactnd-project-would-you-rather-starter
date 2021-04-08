import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';
import Question from '../components/Question';
import Signin from './Signin';


//const hidePack =()=> document.querySelector(".answered").classList.toggle("show-or-hide");

function HomePage(props){
    const { questions, users, signUser }= props;
   
    const answeredQuestion = Object.values(questions).filter((question) => question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !==0 );
    const unAnsweredQuestion = Object.values(questions).filter((question) => question.optionOne.votes.length === 0 || question.optionTwo.votes.length ===0 );
   
    if(!signUser.length){
    return <Signin />
   }
 
    return( 
        <div className="panel-lg w-md"> 
            <div className="leader-title">
                <div>Unanswered Question</div> <div>Answered Question</div> 
                {/* <div onClick={hidePack}>Unanswered Question</div> <div onClick={hidePack}>Answered Question</div>  */}
            </div>          
            <Question questions={answeredQuestion} users={Object.values(users)} className="answered" />
            <Question questions={unAnsweredQuestion} users={Object.values(users)} className="unanswered"/>
                
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