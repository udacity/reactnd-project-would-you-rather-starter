import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

export  function SignInButton (props) {
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
    const classes = useStyles()
    const { children, onClick } = props
    return <Button className={classes.root} children={children} onClick={onClick}></Button>
}

export function AddQuestionButton(props) {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#04406D',
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            borderRadius: '50%',
            boxShadow: '-2px 2px 8px rgba(0, 0, 0, 0.75)',
            cursor: 'pointer',
        }
    })
    const classes = useStyles()
    const { tooltipText } = props
    return (
        <div>
            <Tooltip title={tooltipText}>
                <Fab className={classes.root}>
                <AddIcon style={{ color: 'white' }} />
                </Fab>
            </Tooltip>
        </div>
    );
}
