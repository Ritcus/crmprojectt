import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/addTicketForm/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

import { useState } from 'react'
import { useEffect } from 'react'

const initialFrmDt = {
    subject:"",
    issueDate: "",
    details: ""
}

export const AddTicket= () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    useEffect(() => {},[frmData]);
    
    const handleOnChange= (e) => {
        const { name, value } = e.target;

        
            

        setFrmData({
            ...frmData,
            [name]:value,
        });

    }; 

    const handleOnSubmit= e => {
        e.preventDefault()

        console.log("Form submit request received", frmData)
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnChange= {handleOnChange} 
                    frmDt={frmData}
                    handleOnSubmit={  handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}
