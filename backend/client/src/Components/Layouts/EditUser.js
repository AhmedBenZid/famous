import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux"
import { editUser, registerUser } from '../../JS/Actions/authActions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const EditUser = ({ user }) => {
    const classes = useStyles();
    const [email, setEmail] = useState(user.email);
    const [firstName, setFirstName] = useState(user.firstname);
    const [lastName, setLastName] = useState(user.lastname);
    const [adresse, setAdresse] = useState(user.address);
    const [tel, setTel] = useState(user.tel);
    const dispatch = useDispatch()
    const toggle = () => setModal(!modal);
    const [modal, setModal] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setAdresse('');
        setTel('');
        setModal(false)
    }
    const handleSave = () => {
        const editedUser = {
            firstName,
            lastName,
            tel,
            adresse
        }
        dispatch(editUser(user.id, editedUser));
        history.push('/dashboard');
    }



    return (
        <div>
            <Fab onClick={toggle} color="secondary" aria-label="edit" >
                <EditIcon />
            </Fab>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <form className={classes.form}
                        onSubmit={handleSave}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    aria-required
                                    fullWidth
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    label="First Name"
                                    autoFocus

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="adresse"
                                    label="Adresse"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="adresse"
                                    value={adresse}
                                    onChange={(e) => setAdresse(e.target.value)}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="tel"
                                    label="Phone Number"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    disabled
                                    id="email"
                                    label="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                        <Button color="primary" type="onSubmit" className={classes.submit} onClick={toggle}>Mettre à jour</Button>{' '}
                        <Button color="secondary" onClick={toggle} className="btn-danger mt-2">Cancel</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default EditUser;