import React from 'react';
import { useDispatch } from 'react-redux';
import { List, ListInlineItem } from 'reactstrap';

const PackRow = ({ pack }) => {
    // const dispatch = useDispatch();
    // const delpack = () => {
    //     dispatch(deletepack(pack.id))
    // }
    const materials = (pack && pack.materials).split(',');
    console.log(materials)
    return (
        <><tr>
            <td className="hide-sm">{pack && pack.id}</td>
            <td className="hide-sm">{pack && pack.label}</td>
            <td className="hide-sm">
                <List type="inline">
                    {materials.map((el, index) => <ListInlineItem key={index}>{el}</ListInlineItem>)}
                </List>
            </td>
            {/* <td className="hide-sm">{pack && pack.tel}</td> */}
            <td>
                {/* <button className="btn btn-danger" onClick={delpack}>
                    Delete
              </button> */}
            </td>
        </tr>
        </>
    )
}

export default PackRow
