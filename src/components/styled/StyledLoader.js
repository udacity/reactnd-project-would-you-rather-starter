import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
    root: {
        color: '#f08080'
    }
})

export function StyledLoader() {
    const classes = useStyles()
    return <CircularProgress className={classes.root}></CircularProgress>
}
