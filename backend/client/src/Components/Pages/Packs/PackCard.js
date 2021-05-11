import React from 'react'
import { Card, Button, CardTitle, CardText, CardHeader, CardBody, CardFooter } from 'reactstrap';
import ReservationModal from './ReservationModal';

const PackCard = ({ pack }) => {

    const packColor = () => {
        switch (pack.label) {
            case "FORFAIT BASIC": return "#00ffff";
            case "FORFAIT STANDARD": return "#bbb";
            case "FORFAIT DIAMANT": return "#b9f2ff";
            case "FORFAIT PREMIUM": return "#ff0";
            case "FORFAIT SPECIAL": return "#f33";
            case "FORFAIT GOLD": return "#d3af37";
            default: return "#fff"
        }
    }
    const mat = pack && pack.materials.split(',')
    return (
        <Card className=" m-4 align-content-center"
            style={{
                borderColor: packColor(), borderRadius: "30px", maxWidth: '300px', width: "300px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                transition: '0.3s'
            }}
        >
            <CardHeader tag="h5" style={{ backgroundColor: packColor(), borderRadius: "30px", textAlign: "center" }}>{pack.label}</CardHeader>
            <CardBody className="text-center">
                {mat && mat.map((el, i) => <CardText key={i}>{el}</CardText>)}</CardBody>
            <CardFooter style={{ backgroundColor: packColor(), borderRadius: "30px", textAlign: "center" }}>
                <ReservationModal packId={pack.id} />
            </CardFooter>
        </Card>
    )
}

export default PackCard
