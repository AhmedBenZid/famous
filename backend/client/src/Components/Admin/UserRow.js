import React from 'react'

const UserRow = ({ user }) => {
    return (
        <>
            <td className="hide-sm">{user && user.email}</td>
            <td className="hide-sm">{user && user.firstname}</td>
            <td className="hide-sm">{user && user.lastname}</td>
            <td className="hide-sm">{user && user.adresse}</td>
            <td className="hide-sm">{user && user.tel}</td>
            <td className="hide-sm">{user && user.role}</td>
            <td>
                <button className="btn btn-danger">
                    Delete
              </button>
            </td>
        </>
    )
}

export default UserRow
