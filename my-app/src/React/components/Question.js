import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../../utils/_DATA'

class Question extends Component {
    handleInputChange(event) {
        
    }
    render() {
        const {id, timestamp, author, optionOne, optionTwo}= this.props.question
        console.log("Question",this.props.question)
        return (
            <div>
                <div>{//console.log("user in the component",this.props.user)
                }{this.props.user.name}</div>
                <form>
                    <label>
                        <input type="checkbox"/>  
                        {this.props.question.optionOne.text}  
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" onChange={this.handleInputChange}/>
                        {this.props.question.optionTwo.text}
                    </label> 
                    <br/>       
                    <button>Submit </button>    
                </form>
                <br/>
            </div>

        )
    }
}
function mapStateToProps({users, questions, authedUser},{id}){
    console.log("Author: ",  users[questions[id].author])
    return{

        question:questions[id],
        user:users[questions[id].author]
       ,
    }
}
export default connect(mapStateToProps)(Question)