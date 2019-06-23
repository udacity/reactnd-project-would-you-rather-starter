import React from 'react'
import { 
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { navOther } from '../../actions/navi';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 480,
    margin: 15,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  header: {
    backgroundColor: '#f0f0f0',
    fontSize: 18,
    padding: '10px 0 10px 20px'
  },
  content: {
    display: 'flex'
  },
  detail: {
    width: 'calc(100% - 128px - 25px - 25px)'
  },
  wrapper: {
    width: 'calc(100% - 9px)',
    margin: '20px 0',
    borderLeft: '1px solid #dcdcdc'
  },
  description: {
    padding: '0 16px 16px 25px',
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
  or: {
    fontStyle: 'italic'
  },
  action: {
    padding: '0 16px 0 25px',
    width: '100%'
  }
});

const Question = ({ question, id, author, dispatch }) => {
  const classes = useStyles();

  const pollLink = React.forwardRef((props, ref) => 
    <Link innerRef={ref} {...props} />)

  const handleClick = () => dispatch(navOther())

  return (
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
            <CardContent className={classes.description}>
              <Typography variant="h6">
                Would you rather
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {`${question.optionOne.text}`}
              </Typography>
              <Typography className={classes.or} variant="body2" color="textSecondary">
                or ...
              </Typography>
            </CardContent>
            <CardActions className={classes.action}>
              <Button 
                size="small" 
                color="primary"
                variant="outlined"
                fullWidth
                component={pollLink} 
                to={`/questions/${id}`}
                onClick={handleClick}
              >
                View Poll
              </Button>
            </CardActions>
          </div>
        </div>
      </div>
    </Card>
  )
}

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id],
        author = users[question.author]

  return {
    id,
    question,
    author
  }
}

export default  connect(mapStateToProps)(Question)
