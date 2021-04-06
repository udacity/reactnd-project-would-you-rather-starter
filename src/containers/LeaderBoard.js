import PanelTitle from '../components/PanelTitle';

function LeaderBoard(props){
   
    return(<div className="leaderboard-container"> 
            <div className="content">
                <div className="score-body">
                    <div className="score-circle">image</div>
                    
                </div>
                <div className="flex-between">
                    <p className="flex-around">
                        <strong> Answered Questions  </strong>
                        <strong> 7 </strong>
                    </p>
                    <p className="border-bottom"></p>
                    <p className="flex-around">
                        <strong> Created Questions  </strong>
                        <strong> 3 </strong>
                    </p>
                   
                </div>
                <div className="score">
                    <div className="score-title"><strong>Score</strong></div>
                    <div className="score-body">
                        <strong className="score-circle">70</strong>
                    </div>
                </div>
            </div>
         </div>
       
    )
}
export default LeaderBoard;