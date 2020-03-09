import React, { Component, Fragment } from 'react';
import Header from './components/layouts/Header'
import MainContent from './components/layouts/MainContent'
import Footer from './components/layouts/Footer'
import { muscles, exercises } from './store'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { exercises }
    }
    
    render() {
        return (
            <Fragment>
                <Header />
                <MainContent muscles={muscles} exercises={exercises} />
                <Footer muscles={muscles} />
            </Fragment>
        )
    }
}

export default App
