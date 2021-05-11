import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import DashboardContent from './DashboardContent'
import Header from './Header'


const Dashboard = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    if (!isAuth) {
        return <Spinner />
    }
    return (
        <div>
            <NavBar />
            <Header />
            <DashboardContent />
            <Footer />
        </div >
    )
}

export default Dashboard
