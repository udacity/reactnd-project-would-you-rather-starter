import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Question from './Question';

function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export class QuestionList extends Component {
  render() {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        <ul>
          {this.props.ids.map(id => (
            <li key={id}>
              <div>
                <p>Time: {formatDate(this.props.questions[id].timestamp)}</p>
              </div>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </Typography>
    )
  }
}

const mapStateToProps = ({ questions }, { ids }) => {
  return {
    questions,
    ids
  }
}

export default connect(mapStateToProps)(QuestionList) 
