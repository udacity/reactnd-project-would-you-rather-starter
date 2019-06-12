import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

const Results = ({ question, authedUser, qid, dispatch }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        
        
        
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Results:
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {`${question.optionOne.text} ${question.optionOne.votes.length}/${question.optionOne.votes.length + question.optionTwo.votes.length} `}
            {question.optionOne.votes.indexOf(authedUser) !== -1
              ? 'Your answer'
              : null
            }
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {`${question.optionTwo.text} ${question.optionTwo.votes.length}/${question.optionOne.votes.length + question.optionTwo.votes.length} `}
            {question.optionTwo.votes.indexOf(authedUser) !== -1
              ? 'Your answer'
              : null
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const mapStateToProps = ({ questions, authedUser }, { id }) => {
  // console.log(props)
  // const { id } = props.match.params
  const question = questions[id]
  // console.log(question)
  return {
    question,
    authedUser,
    qid: id
  }
}

export default connect(mapStateToProps)(Results)
