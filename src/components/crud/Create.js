import React, { Fragment } from 'react'
import {
    Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function Create() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  
    return (
        <Fragment>
            <Button variant="fab" color="primary" onClick={handleClickOpen} mini>
                <AddIcon />
            </Button>
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
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Create Exercise</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Create
