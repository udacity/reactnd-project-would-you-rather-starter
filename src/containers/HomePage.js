import PanelTitle from '../components/PanelTitle';

function HomePage(props){
   // TODO: FILter then display answered question and unanswered question.
  // TODO: we have two forms if a user clicks unanswered question they will be displayed and vice versa;
    return(
        <div className="panel w-md"> 
        <div className="leader-title">
            <div>Unanswered Question</div> <div>Answered Question</div> 
        </div>          
                       
          <div className="panel question" >
              <PanelTitle title={'Username Asks for'} />
              <div className="question-detail">
                  <div  className="user-icon">
                      <img src='../images/mother.png' />
                  </div>
                  <div className="question-text">
                      <h2>Would You rather ...</h2>
                      <p> ...question... </p>
                      {/* This is a button which will be used to take question id that a user is going to respond */}
                      <button className="secondary-light" onClick={(e)=> props.history.push('/answer')}>View Poll</button>
                  </div>
              </div>
          </div>
        </div>
    )
}
export default HomePage;