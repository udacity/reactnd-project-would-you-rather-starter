import { connect } from 'react-redux';
import PanelTitle from '../components/PanelTitle';

function HomePage(props){
   // TODO: FILter then display answered question and unanswered question.
  // TODO: we have two forms if a user clicks unanswered question they will be displayed and vice versa;
  console.log(`all users${JSON.stringify(props.questions)}`);
  const unAnsweredQuestion = Object.keys(props.users).filter((user) => user.answers.length === 0);
  const answeredQuestion = Object.keys(props.users).filter((user) => user.answers.length !== 0);
    return(
        <div className="panel w-md"> 
        <div className="leader-title">
            <div>Unanswered Question</div> <div>Answered Question</div> 
        </div>          
                     {/* 1.TODO Filter ANSWERED QUESTION 
                         2. Filter Unanswered Question 
                     */}
            {
            //    unAnsweredQuestion.map((user)=>(
                <div className="panel question" >
                {/* <PanelTitle title={`${user.name} Asks for`} /> */}
                <div className="question-detail">
                    <div  className="user-icon">
                        <img src='../images/mother.png' />
                    </div>
                    <div className="question-text">
                        <h2>Would You rather ...</h2>
                        <p> ...question... </p>
                        {/* This is a button which will be used to take question id that a user is going to respond */}
                        <button className="secondary-light" onClick={(e)=> props.history.push('/answer')}>View Poll</button>
                    </div>
                </div>
                </div>
            //    )) 
            }  
            
        </div>
    )
}
const mapStateToProps =({questions, users, signUser}) =>({questions, users, signUser});
export default connect(mapStateToProps)(HomePage);