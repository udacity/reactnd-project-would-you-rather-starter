import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import './tab-panel.css'

class TabPanel extends Component {
    render() {
        const { value, index, children } = this.props
        return (
            <div className="box-container"
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}>
                {value === index && (
                    <Box className="widget">
                        {children}
                    </Box>
                )}
                </div>
        )
    }
}

export default  TabPanel
