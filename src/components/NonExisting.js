import React from 'react'
import { 
  makeStyles,
  Typography,
} from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
  }
}))

function NonExisting({ logState }) {
  const classes = useStyles()

  if (logState === false || logState === 0) {
    return <Redirect to='/login' />
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        404 Page not found.
      </Typography>
    </div>
  )
}

const mapStateToProps = ({ logState }) => {
  return {
    logState
  }
}

export default connect(mapStateToProps)(NonExisting)
