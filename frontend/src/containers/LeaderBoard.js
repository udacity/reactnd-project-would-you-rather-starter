import PanelTitle from '../components/PanelTitle';
function LeaderBoard(){
   // TODO: FILter then display answered question and unanswered question.
    return(
        <div className="panel w-md"> 
        <div className="leader-title">
            <div>Unanswered Question</div> <div>Answered Question</div> 
        </div>           
                       
          <div className="panel-body">
              this panel body
          </div>
        </div>
    )
}
export default LeaderBoard;