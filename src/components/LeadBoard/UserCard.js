import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
}))

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
  const user = users[id],
        answered = Object.keys(user.answers).length,
        created = user.questions.length

  return {
    user,
    answered,
    created
  }
}

export default connect(mapStateToProps)(UserCard)
