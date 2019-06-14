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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { handleSaveQuestionAnswer } from '../actions/shared';

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

const UserCard = ({ user, answered, created }) => {
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
            {user.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Created ${created}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Answered ${answered}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Toatal ${created + answered}`}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id]
  const answered = Object.keys(user.answers).length
  const created = user.questions.length

  return {
    user,
    answered,
    created
  }
}

export default connect(mapStateToProps)(UserCard) 
