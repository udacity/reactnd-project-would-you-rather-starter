import { connect } from 'react-redux';
import PanelTitle from '../components/PanelTitle';

function HomePage(props){
    const { questions, users }= props;
   // TODO: FILter then display answered question and unanswered question.
  // TODO: we have two forms if a user clicks unanswered question they will be displayed and vice versa;
//   console.log(`all Questions${Object.values(questions.votes)}`);
   const answeredQuestion = Object.values(questions).filter((question) => question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !==0 );
//    console.log(unAnsweredQuestion);
   // const answeredQuestion = Object.keys(props.users).filter((user) => user.answers.length !== 0);
   
   const toggleShow=()=>{
    document.querySelector('.panel.question').classList.add('show-or-hide');
   };
    return(
        <div className="panel w-md"> 
        <div className="leader-title question">
            <div onClick={(e)=>toggleShow()}>Unanswered Question</div> <div>Answered Question</div> 
        </div>          
            <div className="question">
                {
                    answeredQuestion.map((question)=>(
                    <div className="panel question" >
                        { Object.values(props.users).map((user) => user.id === question.author &&(
                            <PanelTitle title={`${user.name} Asks`} />
                            ))                    
                        }
                    
                    <div className="question-detail">
                        <div  className="user-icon">
                            <img src='../images/mother.png' />
                        </div>
                        <div className="question-text">
                            <h2>Would You rather ...</h2>
                            <p> ...{question.optionOne.text.substring(1, 15)}... </p>
                            {/* This is a button which will be used to take question id that a user is going to respond */}
                            <button className="secondary-light" onClick={(e)=> props.history.push('/answer')}>View Poll</button>
                        </div>
                    </div>
                    </div>
                )) 
                }  
            </div>  
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