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

import { Link, Redirect } from 'react-router-dom'


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

const Poll = ({ question, authedUser, qid, dispatch }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    option: 'optionOne',
    // toResults: false
  });

  // function handleChange(event) {
  //   setValue(event.target.value);
  // }

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  }

  const handleSubmit = e => {
    const info = {
      authedUser,
      qid,
      answer: values.option,
    }

    dispatch(handleSaveQuestionAnswer(info))

    // setValues({ ...values, toResults: true })
  }

  // if (values.toResults === true) {
  //   return <Redirect to={`/results/${qid}`} />
  // }

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
        {/* <Link to={`/results/${qid}`}> */}
          <Button 
            size="small" 
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        {/* </Link> */}
      </CardActions>
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

export default connect(mapStateToProps)(Poll)
