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
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const Question = ({ question, id }) => {
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
            {`${question.author} ask`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Would you rather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${question.optionOne.text}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/poll/${id}`}>
          <Button size="small" color="primary">
            Check
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id]

  return {
    id,
    question
  }
}

export default  connect(mapStateToProps)(Question)
