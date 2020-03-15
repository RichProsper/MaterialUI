import React, { Fragment } from 'react'
import {
    Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    makeStyles, InputLabel, MenuItem, FormControl, Select
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { muscles } from '../../store'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 50,
        color: 'white'
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        textTransform: "capitalize"
    },
    menuItem: {
        textTransform: "capitalize"
    }
}))

function Create({ createExercise }) {
    const [open, setOpen] = React.useState(false)
    const [age, setAge] = React.useState('')
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setAge('') // Sets select value back to 'None'
    }
    const changeMuscles = event => setAge(event.target.value)
    const styles = useStyles()

    const createExerciseHandler = () => {
        const title = document.getElementById('title').value
        const description = document.getElementById('desc').value
        const inputMuscles = document.getElementById('muscles').innerHTML

        // ! TO DO: Validate input data

        const id = title.toLowerCase().replace(/ /g, '-')
        createExercise({id:id, title:title, description:description, muscles:inputMuscles })
        handleClose()
    }
  
    return (
        <Fragment>
            <IconButton 
                aria-label="add"
                classes={{ root:styles.root }}
                onClick={handleClickOpen}
            >
                <AddIcon fontSize="small" />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <TextField
                        id="title"
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="desc"
                        margin="dense"
                        label="Description"
                        type="text"
                        multiline
                        rowsMax="4"
                        fullWidth
                    />
                    <FormControl className={styles.formControl}>
                        <InputLabel shrink id="musclesLabel">Muscles</InputLabel>
                        <Select
                            labelId="musclesLabel"
                            id="muscles"
                            displayEmpty
                            value={age}
                            onChange={changeMuscles}
                            className={styles.selectEmpty}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {muscles.map(muscle => 
                                <MenuItem className={styles.menuItem} key={muscle} value={muscle}>
                                    {muscle}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={createExerciseHandler}
                        color="primary"
                        variant="contained"
                        style={{width:'92.5%',marginRight:'4%'}}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Create
