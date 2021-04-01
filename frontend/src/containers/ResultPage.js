import PanelTitle from '../components/PanelTitle';

function ResultPage(){
    //TODO: get question id and recordd answer chosen by a user
  
    return(         
          <div className="panel w-md">
              <PanelTitle title={'Asked By {username}'} />
              <div className="question-detail">
                  <div  className="user-icon">
                      <img src='../images/mother.png' />
                  </div>
                  <div className="panel-body">
                      <h2>Results: </h2>
                      <div className="alert-voted">Your Vote</div>
                      
                      <div className="voted">
                         <h3 className="text-voted">This is the first option on the question</h3>                         
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