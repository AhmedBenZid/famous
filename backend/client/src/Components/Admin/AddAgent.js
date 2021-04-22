import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, Modal, Button } from 'react-bootstrap'
import { addAgent } from '../../JS/Actions/authActions';

const AddAgent = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    }
    const handleShow = () => setShow(true);
    const handleSave = () => {
        const newAgent = {
            email,
            firstName,
            lastName,
            password
        };
        dispatch(addAgent(newAgent));
        handleClose();
    }

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Add Agent
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

export default AddAgent
