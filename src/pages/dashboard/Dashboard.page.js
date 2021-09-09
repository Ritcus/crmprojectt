import React from 'react'

import  {Container, Row, Col, Button} from "react-bootstrap"

import { TicketTable } from '../../components/ticket-table/TicketTable'

import tickets from "../../assets/data/dummyTickets.json"

import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <Container>
            <Row className="mt-5">
               <Col>
                <PageBreadcrumb page="Dashboard" />
               </Col> 
            </Row>

            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Link to= "/addticket">
                    <Button variant="info" style ={{fontSize: "2rem", padding: "10px 30px" }}> Add New Ticket</Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col className="text-center mb-2">
                    <div> Total tickets: 50</div>
                    <div> Pendig tickets: 5</div> 
                
                </Col>
            </Row>

            <Row>
                <Col className="text-left mt-5">
                 Recently Added Tickets
                </Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent-ticket">
                 <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    )
}
