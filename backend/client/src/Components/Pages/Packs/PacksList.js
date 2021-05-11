import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { getPacks } from '../../../JS/Actions/packs';
import PackCard from './PackCard';

const PacksList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacks())
    }, []);

    const packs = useSelector(state => state.packs.packs.data);
    if (!packs) {
        return <Spinner white style={{ margin: "20% 50%" }} />
    }
    return (

        <div className="container d-flex flex-wrap-reverse  ">
            {packs && packs.map(pack => <PackCard pack={pack} key={pack.id} />)}
        </div>
    )
}

export default PacksList
