import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f08080',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#f08080',
            opacity: 0.75,
        },
        marginTop: '20px',
    }
})

export default function StyledButton (props) {
    const classes = useStyles()
    const { children, onClick } = props
    return <Button className={classes.root} children={children} onClick={onClick}></Button>
}
