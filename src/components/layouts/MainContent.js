import React, { Component, Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

class MainContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: 'Welcome!',
            desc : 'Please select an exercise from the list on the left.'
        }
    }

    showExercise = (title, desc) => {
        this.setState({
            title,
            desc
        })
    }
    
    styles = {
        paperLeft: {
            padding: '20px',
            marginTop: '10px',
            marginBottom: '10px',
            height: `${window.innerHeight - 188}px`,
            overflow: 'auto',
            marginRight: '5px'
        },
        paperRight: {
            padding: '20px',
            marginTop: '10px',
            marginBottom: '10px',
            height: `${window.innerHeight - 188}px`,
            overflow: 'auto',
            marginLeft: '5px'
        }
    }
    
    render() {
        const { muscles, exercises, muscleGroup} = this.props

        return (
            <Grid container>
                <Grid item sm>
                    <Paper style={this.styles.paperLeft}>
                        {muscles.map(muscle =>
                            muscleGroup === 'All' || muscleGroup === muscle
                            ?   <Fragment key={muscle}>
                                    <Typography variant='h6' style={{textTransform:'capitalize'}}>
                                        {muscle}
                                    </Typography>
                                    <List component="ul">
                                        {exercises.filter(exercise => exercise.muscles === muscle)
                                            .map(({ title, description }) =>
                                                <ListItem
                                                    key={title}
                                                    button
                                                    onClick={() => {this.showExercise(title, description)}}
                                                >
                                                    <ListItemText primary={title} />
                                                </ListItem>
                                            )
                                        }
                                    </List>
                                </Fragment>
                            :   null
                        )}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={this.styles.paperRight}>
                        <Typography variant='h5'>
                            {this.state.title}
                        </Typography>
                        <Typography variant='subtitle2' style={{marginTop:'20px'}}>
                            {this.state.desc}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default MainContent
