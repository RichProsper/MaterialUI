import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

function Footer({ muscles, changeTab }) {
    const [value, setValue] = React.useState(0)
    
    const handleChange = (event, newVal) => {
        setValue(newVal)
        changeTab( newVal === 0 ? 'All' : muscles[newVal - 1] )
    }

    return (
        <Paper style={{flexGrow:1}}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label='All' />
                {muscles.map(muscle => <Tab key={muscle} label={muscle} />)}
            </Tabs>
        </Paper>
    )
}

export default Footer
