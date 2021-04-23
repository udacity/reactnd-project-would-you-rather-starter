
import { connect } from 'react-redux';
import PanelTitle from '../components/PanelTitle';
function ResultPage(props){
  const {signUser, question, user } = props;
  const {id, optionOne, optionTwo} = question;
  const {name, avatarURL} = user;
  const percent1 = ((optionOne.votes.length * 100)/ (optionOne.votes.length + optionTwo.votes.length));
  const percent2 = ((optionTwo.votes.length * 100)/ (optionTwo.votes.length + optionOne.votes.length));
    return(         
          <div className="panel-lg">
              <PanelTitle title={`Asked By ${name}`} />
              <div className="question-detail">
                  <div  className="user-icon" style={{backgroundImage: `url(${avatarURL})`, alignText: 'center' }}>
                      
                  </div>

                      <div className="panel-body" key={id}>
                          <h2>Results: </h2>
                          
                         { 
                           optionOne.votes.map((v) => v === signUser&& (<div className="chosen" key={v}>Your Vote</div>))
                         }
                          <div className="voted">
                            <h3 className="text-voted">Would you rather {optionOne.text}</h3>                        
                           
                            <div className="wrap-result"> 
                             
                              <div className="wrap-content" 
                                   style={{width: `${percent1}%` }}>
                                  {percent1.toFixed(2)} %
                              </div>
                            </div>
                            <strong> {optionOne.votes.length} Out Of {optionTwo.votes.length + optionOne.votes.length} Votes</strong>

                          </div>
                          {    optionTwo.votes.map((v) =>  v === signUser && ( <div className="chosen">Your vote</div> ))
                            }
                          <div className="voted-by-other">
                            <h3 className="text-voted">Would you rather {optionTwo.text}</h3>                         
                            
                            <div className="wrap-result"> 
                                
                              <div className="wrap-content" style={{width:`${ percent2 }%`}}>
                                  {percent2.toFixed(2)} %
                              </div>
                            </div>
                            <strong> {optionTwo.votes.length} Out Of {optionTwo.votes.length + optionOne.votes.length} Votes</strong>
                          </div>
                      <div>
                            
                  </div>
                    
                  </div>

                </div>
                   
          </div>
       )
    }
  const mapStateToProps =({questions, users, signUser}, ownProps)=>{
    const question = questions[ownProps.question.id] || questions[ownProps.question];
   return {
     question,
     user: users[question.author],
     signUser
   }
  }
export default connect(mapStateToProps)(ResultPage);