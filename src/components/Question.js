//TODO: CHECK IF QUESTION IS ANSWERED THEN Redirect /questions/:id
//        OTHER WISE REDIRECT TO WHERE 
import React,{ Component} from 'react';
import { Link } from "react-router-dom";
import PanelTitle from "./PanelTitle";
import ResultPage from "../containers/ResultPage"

class Question extends Component{
    state = {
        showResult:  false
    }
    openResultPage  (url) {      
      console.log(url);
     this.setState({showResult:true})
    };
    render(){
    const { questions, users, type } = this.props;
    

  return (

    <>
        {questions.map((question)=>(
            <div className="panel question" >
                { users.map((user) => user.id === question.author &&(
                         <PanelTitle title={`${user.name} Asks`}  key={user.id} />
                    ))                    
                }
            
                <div className="question-detail">
                    <div  className="user-icon">
                        { users.map(user => user.id === question.author && (
                           
                        <div  key={user.id} alt="user icon" className="user-icon"
                              style={{backgroundImage: `url(${user.avatarURL})` }} />                                
                        ))                               
                                              
                        }
                    </div>
                    <div className="question-text">
                        <h2>Would You rather ...</h2>
                        <p> ...{question.optionOne.text.substring(1, 15)}... </p>
                        {type!=='answered' ?(
                            <Link to={`/questions/${question.id}`} showResult={false}> 
                               <button className="secondary-light">View Poll </button>
                            </Link> 
                            ):(
                                <Link to={`/questions/${question.id}`} showResult={true}> 
                               <button className="secondary-light">View Poll </button>
                            </Link> 
                            )
                    }

                    </div>
                </div>
             </div>
        ))}     
    </>
  )  
}
}
export default Question;