import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { addReservation } from '../../../JS/Actions/reservation';

const ReservationModal = ({ packId }) => {
    const toggle = () => setModal(!modal);
    const [modal, setModal] = useState(false);
    const [dateReservation, setDateReservation] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = () => {
        const data = { packId, dateReservation }
        dispatch(addReservation(data));
        toggle();
        setDateReservation("")
    }

    return (
        <div>
            <Button onClick={toggle} color="secondary"  >
                Reserve
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Choisir la date à reserve {packId}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="Date" >Date</Label>
                            <Input

                                type="date"
                                name="date"
                                id="Date"
                                placeholder="date placeholder"
                                value={dateReservation}
                                onChange={(e) => setDateReservation(e.target.value)}

                            />
                            <Button type="submit">confirme</Button>
                            <Button onClick={toggle}>Cancel</Button>
                        </FormGroup></Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ReservationModal
