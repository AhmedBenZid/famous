import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../JS/Actions/authActions'

const Register = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setFirstName('');
        setLastName('');
        setAdresse('');
        setTel('');
        setPassword('');
    }
    const handleShow = () => setShow(true);
    const handleSave = () => {
        const newUser = {
            email,
            firstName,
            lastName,
            adresse,
            tel,
            password
        };
        dispatch(registerUser(newUser));
        handleClose();
    }

    return (
        <>
            <Button variant="outline-danger" onClick={handleShow}>
                Register
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Form className="m-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name"
                            value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name"
                            value={lastName} onChange={e => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control type="text" placeholder="Adresse"
                            value={adresse} onChange={e => setAdresse(e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Tel</Form.Label>
                        <Form.Control type="text" placeholder="Tel"
                            value={tel} onChange={e => setTel(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

export default Register
