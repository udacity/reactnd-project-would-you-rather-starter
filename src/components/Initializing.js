import React from 'react'
import { 
  makeStyles,
  Typography,
  CircularProgress
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
  },
  progress: {
    marginTop: 10
  },
}))

function Initializing() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6">Page is loading...</Typography>
      <CircularProgress className={classes.progress} />
    </div>
  )
}

export default Initializing
