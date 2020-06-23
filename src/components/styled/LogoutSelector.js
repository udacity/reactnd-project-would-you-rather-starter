import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles({
    underline: {
        '&:before': {
            display: 'none'
        }
    },
    icon: {
        opacity: 0
    }
})

export function LogoutSelector(props) {
    const classes = useStyles()
    const { children } = props
    return <Select className ={`${classes.underline} ${classes.icon}`} children={children}></Select>
}
