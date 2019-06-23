import React from 'react'
import { 
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core'
import { connect } from 'react-redux'

import ResultCard from './ResultCard';
import BadgedResultCard from './BadgedResultCard';

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
    marginLeft: 15,
    marginRight: 15,
  },
  detail: {
    width: 'calc(100% - 128px - 15px - 15px)'
  },
  wrapper: {
    width: 'calc(100% - 9px)',
    margin: '20px 0',
    borderLeft: '1px solid #dcdcdc'
  },
  description: {
    padding: '0 16px 0 25px',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}))

const Results = ({ authedUser, author, id, options }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          disableTypography={true}
          title={`Asked by ${author.name}`}
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
              <CardContent className={classes.description}>
                <Typography gutterBottom variant="h6">
                  Results:
                </Typography>
                {options.map((option, index) => (
                  option.votes.indexOf(authedUser) !== -1
                    ? <BadgedResultCard key={index} id={id} option={index} />
                    : <ResultCard key={index} id={id} option={index} />
                ))}
              </CardContent>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id],
        author = users[question.author],
        options = [question.optionOne, question.optionTwo]
  
  return {
    authedUser,
    author,
    id,
    options
  }
}

export default connect(mapStateToProps)(Results)
