import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { loginUser } from '../../JS/Actions/authActions';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("");
    }
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const formData = {
            email, password
        }
        dispatch(loginUser(formData));
        handleClose()
    }
    return (
        <>
            <Button className='mr-4' variant="outline-primary" onClick={handleShow}>
                Login
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Form className="m-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            example@example.com
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Login
            </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

export default Login
