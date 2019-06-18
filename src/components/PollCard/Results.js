import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
}));

const Results = ({ question, authedUser }) => {
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
            {`${question.optionOne.text} 
              ${question.optionOne.votes.length}/${question.optionOne.votes.length + 
                question.optionTwo.votes.length} `}
            {question.optionOne.votes.indexOf(authedUser) !== -1
              ? 'Your answer'
              : null
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${question.optionTwo.text} 
              ${question.optionTwo.votes.length}/${question.optionOne.votes.length + 
                question.optionTwo.votes.length} `}
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
  const question = questions[id]
  
  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Results)
