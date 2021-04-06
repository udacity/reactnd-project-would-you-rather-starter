import React from  'react';
function PanelTitle({title, caption}){
    return(
       
          <div className="panel-title">
            <h2>{ title }</h2>
            { caption && <p>{caption}</p> }            
          </div>
          
      
    )
}
export default PanelTitle;