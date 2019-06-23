import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

import ResultCard from './ResultCard'

const useStyles = makeStyles(theme => ({
  badge: {
    margin: 0,
    display: 'inherit',
    height: '100%',
    backgroundColor: blue[100]
  },
}))

const StyledBadge = withStyles(theme => ({
  badge: {
    display: 'flex',
    textAlign: 'center',
    height: 37,
    width: 40,
    borderRadius: 26
  },
}))(Badge)

function BadgedResultCard({ id, option }) {
  const classes = useStyles()

  return (
    <StyledBadge color="secondary" badgeContent="Your Vote" className={classes.badge}>
      <ResultCard id={id} option={option} />
    </StyledBadge>
  )
}

export default BadgedResultCard