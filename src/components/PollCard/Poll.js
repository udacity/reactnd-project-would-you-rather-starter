import React from 'react'
import { 
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import { handleSaveQuestionAnswer } from '../../actions/shared';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 15
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    margin: 15,
  },
  header: {
    backgroundColor: '#f0f0f0',
    fontSize: 18,
    padding: '10px 0 10px 20px'
  },
  content: {
    display: 'flex'
  },
  mediaWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  media: {
    width: 128,
    height: 128,
    marginLeft: 25,
    marginRight: 25,
  },
  detail: {
    width: 'calc(100% - 128px - 25px - 25px)'
  },
  wrapper: {
    width: 'calc(100% - 9px)',
    margin: '20px 0',
    borderLeft: '1px solid #dcdcdc'
  },
  cardContent: {
    padding: '0 16px 16px 25px'
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  action: {
    padding: '0 16px 0 25px',
    width: '100%'
  }
}))

const Poll = ({ question, author, qid, authedUser, dispatch }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    option: 'optionOne',
  })

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
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          disableTypography={true}
          title={`${author.name} asks:`}
        />
        <div className={classes.content}>
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.media}
              alt={author.name}
              image={author.avatarURL}
            />
          </div>
          <div className={classes.detail}>
            <div className={classes.wrapper}>
              <form autoComplete="off">
                <CardContent className={classes.cardContent}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Would you rather ...</FormLabel>
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
                <CardActions className={classes.action}>
                  <Button 
                    size="small" 
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </CardActions>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id],
        author = users[question.author]
  
  return {
    question,
    author,
    qid: id,
    authedUser
  }
}

export default connect(mapStateToProps)(Poll)
