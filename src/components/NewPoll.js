import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared';
import { Redirect, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function NewPoll({ authedUser, dispatch, logState }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    option1: '',
    option2: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClick = e => {
    console.log(values)
    const {option1, option2} = values
    const question = {
      optionOneText: option1,
      optionTwoText: option2,
      author: authedUser
    }

    dispatch(handleSaveQuestion(
      question,
      () => setValues({ ...values, option1: '', option2: '' })
    ))
  }

  if (logState === false) {
    return <Redirect to='/login' />
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="option1"
        label="Enter Option One Text Here"
        className={classes.textField}
        value={values.option1}
        onChange={handleChange('option1')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="option2"
        label="Enter Option Two Text Here"
        className={classes.textField}
        value={values.option2}
        onChange={handleChange('option2')}
        margin="normal"
        variant="outlined"
      />
      <Button onClick={handleClick}>
        Submit
      </Button>
    </form>
  );
}

const mapStateToProps = ({ authedUser, logState }) => ({
  authedUser,
  logState
})

export default connect(mapStateToProps)(NewPoll) 