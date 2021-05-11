import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { getUserReservation } from '../../../JS/Actions/reservation';

const ListReservations = ({ user }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserReservation(user.id))
    }, [])
    const reservations = useSelector(state => state.reservation.userReservation.data)
    return (
        <Table className="container bg-white m-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Forfait</th>
                    <th>Date de reservation</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {reservations && reservations.map(el => <tr>
                    <th scope="row">{el.id}</th>
                    <td>{el.label}</td>
                    <td>{el.dateReservation.slice(0, 10)}</td>
                    <td>{el.status}</td>
                    <td><span className="btn btn-info">Edite</span></td>
                    <td><span className="btn btn-danger">Supprime</span></td>
                </tr>)}
            </tbody>
        </Table>
    );
}

export default ListReservations;