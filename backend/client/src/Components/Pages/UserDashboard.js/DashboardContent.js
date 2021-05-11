import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UserCard from './UserCard';
import ListReservations from './ListReservations';
import ListFavoris from './ListFavoris';
import { useSelector } from 'react-redux';

const DashboardContent = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const user = useSelector(state => state.authReducer.user)
    return (
        <div>
            <Nav tabs className="d-flex justify-content-around bg-dark">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Mes Informations
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Mes Reservation
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Mes Favoris
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="bg-dark">
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <UserCard user={user} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <ListReservations user={user} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <ListFavoris />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default DashboardContent;