import React, { Fragment } from 'react'
import {
    Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    makeStyles
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 50,
        color: 'white'
    }
})

function Create() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const styles = useStyles()
  
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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained" style={{flex:1}}>Create</Button>
                    <Button onClick={handleClose} color="secondary" variant="contained" style={{flex:1}}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Create
