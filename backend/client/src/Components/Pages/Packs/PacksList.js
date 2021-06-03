import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { getPacks } from '../../../JS/Actions/packs';
import PackCard from './PackCard';
import Carousel from 't-a-e-3d-carousel-reactjs'

const PacksList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacks())
    }, []);

    const packs = useSelector(state => state.packs.packs.data);
    if (!packs) {
        return <Spinner white style={{ margin: "20% 50%" }} />
    }
    const ListPacks = [];
    packs.map(el => ListPacks.push({ title: el.label, url: el.description }))
    return (

        <div className="packList">
            <Carousel imageList={ListPacks} className="carrouselpack" />
        </div>
    )
}

export default PacksList
