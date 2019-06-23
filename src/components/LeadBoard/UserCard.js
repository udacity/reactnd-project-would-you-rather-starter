import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar
} from '@material-ui/core'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxWidth: 480,
    margin: '15px 0',
    '&:last-child': {
      marginBottom: 0,
    },
    '&::before': {
      content: "''",
      display: 'block',
      width: 0,
      height: 0,
      borderTop: '50px solid #f0f0f0',
      borderRight: '50px solid transparent',
      position: 'absolute'
    }
  },
  mediaWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  media: {
    width: 128,
    height: 128,
    marginLeft: 10,
    marginRight: 10,
  },
  detail: {
    width: 'calc(100% - 128px - 10px - 10px)'
  },
  cardContent: {
    display: 'flex',
    padding: '20px 15px 20px 0',
    '&:last-child': {
      paddingBottom: 20,
    },
  },
  wrapper: {
    flexGrow: 1,
    borderLeft: '1px solid #dcdcdc',
    borderRight: '1px solid #dcdcdc'
  },
  report: {
    paddingLeft: 15,
    paddingRight: 20
  },
  reportTitle: {
    paddingBottom: 10
  },
  reportContent: {
    display: 'flex',
    padding: '10px 0',
    '&:last-child': {
      borderTop: '1px solid #dcdcdc'
    },
  },
  pre: {
    flexGrow: 1
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    border: '1px solid #dcdcdc',
    borderRadius: 4,
    width: 82
  },
  scoreTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '40%',
    borderBottom: '1px solid #dcdcdc',
    backgroundColor: '#f0f0f0'
  },
  avatar: {
   backgroundColor: theme.palette.primary.main,
  },
  scoreResult: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  trophy: {
    position: 'absolute',
    margin: 5
  },
  gold: {
    color: 'gold'
  },
  silver: {
    color: 'silver'
  },
  copper: {
    color: 'brown'
  }
}))

const colors = ['gold', 'silver', 'copper']

const UserCard = ({ user, answered, created, rank }) => {
  const classes = useStyles();
  const colorClass = rank < 3 ? classes[colors[rank]] : null

  return (
    <Card className={classes.card}>
      {rank < 3 
        ? <FontAwesomeIcon 
            className={classNames(classes.trophy, colorClass)} 
            icon={faTrophy} 
            size="1x" 
          />
        : null
      }
      <div className={classes.mediaWrapper}>
        <CardMedia
          className={classes.media}
          alt={user.name}
          image={user.avatarURL}
        />
      </div>
      <div className={classes.detail}>
        <CardContent className={classes.cardContent}>
          <div className={classes.wrapper}>
            <div className={classes.report}>
              <Typography className={classes.reportTitle} variant="h5">
                {user.name}
              </Typography>
              <div className={classes.reportContent}>
                <Typography className={classes.pre} variant="body2">
                  Answered questions 
                </Typography>
                <Typography>
                  {answered}
                </Typography>
              </div>
              <div className={classes.reportContent}>
                <Typography className={classes.pre} variant="body2">
                  Created questions
                </Typography>
                <Typography>
                  {created}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.score}>
            <div className={classes.scoreTitle}>
              <Typography align="center" display="block">
                score
              </Typography>
            </div>
            <div className={classes.scoreResult}>
              <Avatar className={classes.avatar}>
                {created + answered}
              </Avatar>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

const mapStateToProps = ({ users }, { id, rank }) => {
  const user = users[id],
        answered = Object.keys(user.answers).length,
        created = user.questions.length

  return {
    user,
    answered,
    created,
    rank
  }
}

export default connect(mapStateToProps)(UserCard)
