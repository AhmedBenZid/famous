import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPacks } from '../../JS/Actions/packs';
import PackRow from './PackRow';


const ListPacks = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacks())
    }, []);
    const packs = useSelector(state => state.packs.packs.data)
    return (
        <div className='container border b-2'>
            <h2 className="my-2">List of Packs</h2>
            {/* <div className="dash-buttons m-2 d-flex justify-content-end"><AddAgent /></div> */}
            <table className="table bg-dark text-info ">
                <thead >
                    <tr className="text-info">
                        <th className="hide-sm">ID</th>
                        <th className="hide-sm">Label</th>
                        <th className="hide-sm">Materiels</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {packs && packs.map(pack => <PackRow key={pack.id} pack={pack} />)}

                </tbody>
            </table>
        </div >
    )
}

export default ListPacks
