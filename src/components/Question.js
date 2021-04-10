//TODO: CHECK IF QUESTION IS ANSWERED THEN Redirect /questions/:id
//        OTHER WISE REDIRECT TO WHERE 
import { Link } from "react-router-dom";
import PanelTitle from "./PanelTitle";

export default function Question(props){
    const { questions, users, type } = props;

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
                        
                        <Link to={`${type!=='answered' ? `/questions/${question.id}`:'/answeredRoute'}`}> {/** I fill answered questions here */}
                             <button className="secondary-light">View Poll</button>
                            </Link> 
                        
                        
                  

                    </div>
                </div>
             </div>
        ))}     
    </>
  )  
}