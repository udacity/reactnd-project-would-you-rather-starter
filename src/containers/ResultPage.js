import { connect } from 'react-redux';
import PanelTitle from '../components/PanelTitle';

function ResultPage(props){
    //TODO: get question id and recordd answer chosen by a user
   // display a question and percentage of it's votes
  
   const {question, user, signUser} = props; 
   
   console.log(JSON.stringify(question))
   //console.log(JSON.stringify(user))

   // CHECK IF QUESTION ID  INCLUDE IN  LOGGED IN USER ANSWERS
   // CHECK THAT QUESTION ID AND SAY IT'S THE SAME AS LOGGED IN USER CHOICE
   //COUNT VOTES ON EVERY QUESTION OPTION    
    
    if(Object.values(user)[0]){
      const {name, avatarURL} = Object.values(user)[0];
   
    return(         
          <div className="panel-lg">
              <PanelTitle title={`Asked By ${name}`} />
              <div className="question-detail">
                  <div  className="user-icon" style={{backgroundImage: `url(${avatarURL})`, alignText: 'center' }}>
                      
                  </div>
                  {  Object.values(question).map(({id, optionOne, optionTwo})=>(
                    <>
                      <div className="panel-body" key={id}>
                          <h2>Results: </h2>
                          
                         { 
                           optionOne.votes.map((v) => v === signUser&& (<div className="chosen">Your Vote</div>))
                         }
                          <div className="voted">
                            <h3 className="text-voted">Would you rather {optionOne.text}</h3>                        
                           
                            <div className="wrap-result"> 
                             
                              <div className="wrap-content" 
                                   style={{width: `${optionOne.votes && (optionOne.votes.length * 100)/
                                     (optionTwo.votes.length + optionOne.votes.length)}%` }}>
                                  {optionOne.votes && (optionOne.votes.length * 100)/
                                     (optionTwo.votes.length + optionOne.votes.length)} %
                              </div>
                            </div>
                            <strong> {optionOne.votes.length} Out Of {optionTwo.votes.length + optionOne.votes.length} Votes</strong>

                          </div>
                          {    optionTwo.votes.map((v) =>  v === signUser && ( <div className="chosen">Your vote</div> ))
                            }
                          <div className="voted-by-other">
                            <h3 className="text-voted">Would you rather {optionTwo.text}</h3>                         
                            
                            <div className="wrap-result"> 
                                
                              <div className="wrap-content" style={{width:`${ optionTwo.votes && (optionTwo.votes.length * 100)/ 
                              (optionTwo.votes.length + optionOne.votes.length) }%`}}>
                                  {(optionTwo.votes.length * 100)/ (optionTwo.votes.length + optionOne.votes.length)} %
                              </div>
                            </div>
                            <strong> {optionTwo.votes.length} Out Of {optionTwo.votes.length + optionOne.votes.length} Votes</strong>
                          </div>
                      <div>
                            
                  </div>
                    
                  </div>
                    </>
                  ))}
                </div>
                   
          </div>
       )
    }
}
function mapStateToProps({signUser, users, questions},{questionId}){
  const question = Object.values(questions).filter(({id})=>id === questionId)
  const user = Object.values(users).map(user =>{
      if(user.questions.find((question)=>question === questionId )){            
          return user
              
      }
  }).filter(x=>x !== undefined); // all question belongs are retrieved with null as value for the questions which doesn't match the condition so this line skipps null values

  return {signUser, user, question};
}
export default connect(mapStateToProps)(ResultPage);