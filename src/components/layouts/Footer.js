import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

function Footer({ muscles }) {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => setValue(newValue)

    return (
        <Paper className={classes.root}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label='All' />
                {muscles.map(muscle => <Tab label={muscle} />)}
            </Tabs>
        </Paper>
    )
}

export default Footer
