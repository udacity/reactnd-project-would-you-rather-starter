import PanelTitle from '../components/PanelTitle';

function AnswerQuestion(props){
    //TODO: get question id and recordd answer chosen by a user
     
    return(         
          <div className="panel w-md">
              <PanelTitle title={'Username Asks '} />
              <div className="question-detail">
                  <div  className="user-icon">
                      <img src='../images/mother.png' />
                  </div>
                  <div className="panel-body h-md">
                      <h2>Would You Rather ...</h2>
                      <div className="flex-inline">
                         <input type="radio" name="answer" /> <label for="answer"> Option 1 </label>
                      </div>
                      <div className="flex-inline">
                            <input type="radio" name="answer" /> <label for="answer"> Option 1 </label>
                      </div> 
                      
                      <button type="submit" onClick={props.history.push("/results")}>Submit</button>
                  </div>
              </div>
          </div>
       )
}
export default AnswerQuestion;