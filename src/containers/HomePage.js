import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import Signin from './Signin';

class HomePage extends Component {
    state = {
        toggle: false
    }

    showAnswered =()=>this.setState(() => ({ toggle: true }))
    hideAnswered =()=>this.setState(() => ({ toggle: false }))

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

                <div onClick={this.hideAnswered}>
                    Unanswered Question
                </div> 
                <div onClick={this.showAnswered}>
                    Answered Question
                </div> 
            </div>  
              {  toggle===true ? <Question questions={answeredQuestion} users={Object.values(users)}/>  :
                 <Question questions={notAnsweredQuestion} users={Object.values(users)} />
             }
        </div>

    )
}
}
//const mapStateToProps =({questions, users, signUser}) =>({questions, users, signUser});
function mapStateToProps({questions, users, signUser}){
    //console.log('questions',Object.values(questions));
    //let test to print text of the option one
   // alert(JSON.stringify(signUser))

    return {questions, users, signUser};
}

export default connect(mapStateToProps)(HomePage);