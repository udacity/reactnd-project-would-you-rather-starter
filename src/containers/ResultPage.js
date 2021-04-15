import PanelTitle from '../components/PanelTitle';

function ResultPage(){
    //TODO: get question id and recordd answer chosen by a user
   // display a question and percentage of it's votes
  
    return(         
          <div className="panel-lg">
              <PanelTitle title={'Asked By {username}'} />
              <div className="question-detail">
                  <div  className="user-icon">
                      <img src='../images/mother.png' />
                  </div>
                    <div className="panel-body">
                      <h2>Results: </h2>
                      <div className="alert-voted">Your Vote</div>
                       {/* Todo: if username voted this question else use voted by other */}
                      <div className="voted">
                         <h3 className="text-voted">This is the first option on the question</h3>                         
                         <progress id="progress" value="32" max="100" /> <br />    
                         <label for="progress"> <strong> X out of Total Votes</strong></label>
                      </div>
                      <div className="voted-by-other">
                         <h3 className="text-voted">Answers responded by others</h3>                         
                         <progress id="progress" value="32" max="100" /> <br />    
                         <label for="progress"> <strong> X out of Total Votes</strong></label>
                      </div>
                    <div>
                           
                </div>
                    
                </div>
              </div>
          </div>
       )
}
export default ResultPage;