import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../JS/Actions/authActions';
import UserRow from './UserRow';


const ListUsers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, []);
    const users = useSelector(state => state.authReducer.users.data)
    return (
        <div className='container border b-2'>
            <h2 className="my-2">List of Users</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>E-mail</th>
                        <th className="hide-sm">First Name</th>
                        <th className="hide-sm">Last Name</th>
                        <th className="hide-sm">Adresse</th>
                        <th className="hide-sm">Tel_Number</th>
                        <th className="hide-sm">Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {users && users.map(user => <UserRow key={user.id} user={user} />)}
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default ListUsers
