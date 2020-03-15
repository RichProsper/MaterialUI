import React, { Component, Fragment } from 'react';
import Header from './components/layouts/Header'
import MainContent from './components/layouts/MainContent'
import Footer from './components/layouts/Footer'
import { muscles, exercises } from './store'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises,
            muscleGroup: 'All',
        }
    }

    changeTab = muscleGroup => this.setState({ muscleGroup })
    createExercise = exercise => this.setState({ exercises: [...exercises, exercise] })
    
    render() {
        return (
            <Fragment>
                <Header createExercise={this.createExercise} />
                <MainContent muscles={muscles} exercises={exercises} muscleGroup={this.state.muscleGroup} />
                <Footer muscles={muscles} changeTab={this.changeTab} />
            </Fragment>
        )
    }
}

export default App
