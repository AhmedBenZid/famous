import React from 'react';
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Spinner
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import EditUser from '../../Layouts/EditUser';

const UserCard = ({ user }) => {
    // const user = useSelector(state => state.authReducer.user)
    if (!user) {
        return <Spinner color="dark" style={{ margin: "20% 50%" }} />
    }
    return (
        <div style={{ margin: "2% 20%" }}>
            <Card>
                < CardHeader className="d-flex justify-content-between bg-primary " > <h3>User Informations</h3> <EditUser user={user} /></ CardHeader>
                <CardBody>
                    <CardTitle tag="h5">{user && user.firstname.toUpperCase()} {user && user.lastname.toUpperCase()}</CardTitle>
                    <CardText>Email : {user && user.email}</CardText>
                    <div className="d-flex justify-content-between">
                        <CardText>Adresse : {user && user.address}</CardText>
                        <CardText>Telephone : {user && user.tel}</CardText>
                    </div>

                </CardBody>
            </Card>
        </div >
    )
}

export default UserCard
