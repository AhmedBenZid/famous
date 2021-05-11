import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Content = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs className="d-flex justify-content-around">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        About-Us
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Notre Philosophie
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Nos Objectifs
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="container p-4">
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p>Toppix est une agence de communication événementielle créée en 2014 dont la mission est de
                            prendre en charge l’ensemble de vos besoins et problématiques de communication. Toppix accompagne les particuliers, personnalités publiques et entreprises dans la conception et la mise en
                            œuvre de leurs campagnes de communication globale : conseils en stratégies et image,design,
                            création, webmarketing, production audiovisuelle, gestion des événements et autres ...
                            Une équipe de jeunes dopés à la créativité issue des 4 coins d’Afrique car nous pensons que la
                            mixité génère la multiplication de talents de chacun d’entre nous. Des talents complémentaires,
passionnés, ambitieux et sur motivés qui se réinventent chaque jour pour des projets audacieux</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <p>Notre approche est celle selon laquelle les menaces ne doivent plus être perçues comme des
                            dangers mais plutôt comme des opportunités et des challenges pour mieux affirmer votre
                            présence sur le marché.
                            Le respect mutuel est souverain pour asseoir une relation transparente et de confiance, afin
                            d'aboutir à la satisfaction des différents projets qui nous sont confiés.
                            A chacune des missions que vous remettez à nos soins, notre équipe veille à agir avec professionnalisme, car pour nous, votre sollicitation est une marque de confiance. Nous pensons qu’il n’existe
                            pas de modèle de communication prêt à l’emploi.
                            C’est pourquoi chaque projet est pensé, étudié et adapté à la cible pour susciter le sentiment et
faire jaillir les émotions recherchées</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <p>Notre premier objectif, dont tous les autres découlent, est la satisfaction de nos clients. Partager
                            avec eux la réussite des actions entreprises est notre principale motivation. Notre second objectif
                            étant de fournir un service de qualité à des prix avantageux pour nos clients et de toujours garder
                            à l’esprit le souci de satisfaire le client.
</p>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Content;