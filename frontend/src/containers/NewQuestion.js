import React from  'react';
import PanelTitle from '../components/PanelTitle';
function NewQuestion(){
    return(
        <div className="panel">
          <PanelTitle title="New Question"/>
          <div className="panel-body">
          <label> Complete the question</label>
          <h1>Would You Rather...</h1>
            <input type="text" placeholder="Enter Option 1 Here" />
               <h2>OR</h2>
            <input type="text" placeholder="Enter Option 2 Here" />
            <button> Submit </button>
          </div>
        </div>
    )
}
export default NewQuestion;