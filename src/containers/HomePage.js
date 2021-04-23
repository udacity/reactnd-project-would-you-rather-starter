import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { isQuestionAnswered } from '../utils/api';
import Signin from './Signin';

class HomePage extends Component {
    state = {
        toggle: false
    }

    showAnswered =()=>this.setState(() => ({ toggle: true }))
    hideAnswered =()=>this.setState(() => ({ toggle: false }))

    render() {
    const { toggle } = this.state;
    const {answeredQuestion,notAnsweredQuestion, users, signUser }= this.props;
   
  
     
    if(!signUser.length){
      return <Signin />
   }

    return( 

        <div className="panel-lg w-md"> 
            <div className="leader-title">

                <div onClick={this.hideAnswered}>
                    Unanswered Question
                </div> 
                <div onClick={this.showAnswered}>
                    Answered Question
                </div> 
            </div>  
              {  toggle ? <Question questions={answeredQuestion} users={Object.values(users)}  />  :
                 <Question questions={notAnsweredQuestion} users={Object.values(users)} />
             }
        </div>

    )
}
}

function mapStateToProps({questions, users, signUser}){
 const answeredQuestion = Object.values(questions).filter(({optionOne, optionTwo}) =>  isQuestionAnswered(optionOne,optionTwo, signUser))
 const notAnsweredQuestion = Object.values(questions).filter(({optionOne, optionTwo}) =>  !isQuestionAnswered(optionOne,optionTwo, signUser))

    return {
        answeredQuestion,
        notAnsweredQuestion,
         users, 
         signUser,
         questions
        };
}

export default connect(mapStateToProps)(HomePage);