import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import NewQuestionForm from '../components/NewQuestionForm';

class AskAQuestion extends Component {
    render () {
        return (
            <div style={{color: 'white'}}>
                <Container>
                    <h1>Ask a new question</h1>
                    <NewQuestionForm/>
                </Container>
            </div>
        )
    }
}

export default AskAQuestion;