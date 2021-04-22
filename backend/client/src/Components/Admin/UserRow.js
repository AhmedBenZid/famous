import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../JS/Actions/authActions';

const UserRow = ({ user }) => {
    const dispatch = useDispatch();
    const delUser = () => {
        dispatch(deleteUser(user.id))
    }
    return (
        <><tr>
            <td className="hide-sm">{user && user.email}</td>
            <td className="hide-sm">{user && user.firstname}</td>
            <td className="hide-sm">{user && user.lastname}</td>
            <td className="hide-sm">{user && user.adresse}</td>
            <td className="hide-sm">{user && user.tel}</td>
            <td className="hide-sm">{user && user.role}</td>
            <td>
                <button className="btn btn-danger" onClick={delUser}>
                    Delete
              </button>
            </td>
        </tr>
        </>
    )
}

export default UserRow
