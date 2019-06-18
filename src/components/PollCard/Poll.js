import React from 'react'
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import { handleSaveQuestionAnswer } from '../../actions/shared';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

const Poll = ({ question, authedUser, qid, dispatch }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    option: 'optionOne',
  });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault()

    const info = {
      authedUser,
      qid,
      answer: values.option,
    }

    dispatch(handleSaveQuestionAnswer(info))
  }

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
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Would you rather</FormLabel>
            <RadioGroup
              name="rather"
              className={classes.group}
              value={values.option}
              onChange={handleChange('option')}
            >
              <FormControlLabel 
                value="optionOne" 
                control={<Radio />} 
                label={question.optionOne.text} 
              />
              <FormControlLabel 
                value="optionTwo" 
                control={<Radio />} 
                label={question.optionTwo.text} 
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = ({ questions, authedUser }, { id }) => {
  const question = questions[id]
  
  return {
    question,
    authedUser,
    qid: id
  }
}

export default connect(mapStateToProps)(Poll)
