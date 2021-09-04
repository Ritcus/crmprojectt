import React from 'react'

import { Jumbotron, Form, Row, Col, Button, Container } from 'react-bootstrap'

import PropTypes from "prop-types"

import "./add-ticket-form-style.css";

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt}) => {
    console.log(frmDt);
    return (
        <Jumbotron >
            <h1 className=" text-info text-center"> Add New Ticket </h1>
            <hr />
            <Container  className=" mt-3 add-new-ticket" bg-light>
            
                <Form autoComplete="off" onSubmit={handleOnSubmit}>

                    <Form.Group as ={Row} >
                        <p />
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9} >
                        <Form.Control
                            type="subject"
                            name="subject"
                            minLength="3"
                            maxLength="100"
                            value={frmDt.subject}
                            onChange={handleOnChange}
                            
                            placeholder="Enter Subject"
                            required
                        />
                        </Col>
                    </Form.Group>
                    <p />
                    
                    <Form.Group as ={Row}>
                        <Form.Label column sm={3}>Date</Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                            type="date"
                            name="issueDate"
                            value={frmDt.issueDate}
                            onChange={handleOnChange}
                            
                            placeholder="Enter Date"
                            required
                        />
                        </Col>
                    </Form.Group>
                    <p />
                    <Form.Group className="mb-5">
                        <Form.Label >Details</Form.Label>
                        
                        <Form.Control 
                            as="textarea"
                            name="details"
                            rows="5"
                            value={frmDt.details}
                            onChange={handleOnChange}
                            
                            placeholder="Enter Details"
                            required
                        />
                        
                    </Form.Group>
                    <p />
                    <div className=" mb-10 text-center ">
                        <Button type="submit" variant="info" block margin-bottom="5">Submit</Button>
                        
                    </div>
                    
                </Form>
                
            </Container>
            
        </Jumbotron>
    )
}

AddTicketForm.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired, 
    frmDt: PropTypes.object.isRequired
}