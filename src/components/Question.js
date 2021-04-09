import PanelTitle from "./PanelTitle";

export default function Question(props){
    const { questions, users } = props;

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
                            // style={{backgroundImage: `url(${'/icons/user3.jpg'})` }} /> 
                        <div  key={user.id} alt="user icon" className="user-icon"
                              style={{backgroundImage: `url(${user.avatarURL})` }} />                                
                        ))                               
                                              
                        }
                    </div>
                    <div className="question-text">
                        <h2>Would You rather ...</h2>
                        <p> ...{question.optionOne.text.substring(1, 15)}... </p>
                        {/* This is a button which will be used to take question id that a user is going to respond */}
                        <button className="secondary-light">View Poll</button>
                        {/* <button className="secondary-light" onClick={(e)=> props.history.push('/answer')}>View Poll</button> */}
                    </div>
                </div>
             </div>
        ))}     
    </>
  )  
}