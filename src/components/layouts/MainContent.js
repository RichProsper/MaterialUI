import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import LeftPanel from './content/LeftPanel'
import RightPanel from './content/RightPanel'

class MainContent extends Component {
    styles = {
        paper: {
            padding: '20px',
            marginTop: '10px',
            marginBottom: '10px'
        }
    }

    render() {
        return (
            <Grid container>
                <Grid item sm>
                    <Paper style={this.styles.paper}>
                        <LeftPanel /> 
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={this.styles.paper}>
                        <RightPanel />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default MainContent
