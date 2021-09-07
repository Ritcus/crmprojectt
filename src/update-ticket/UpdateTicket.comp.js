import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import PropTypes from "prop-types"
export const UpdateTicket = ({msg, handleOnChange,  handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Replay </Form.Label> 
            <div>{"\n"}
            <Form.Text > Please replay your message </Form.Text></div>
            <Form.Control 
            value={msg}
            onChange={handleOnChange}
            
            as="textarea"
            row="5"
            name= "detail" />

            <div className="text-right mt-4">
                <Button variant ="info" type="submit" >Replay
                </Button>
            </div>
        </Form>

    )
}
UpdateTicket.propTypes ={
    msg: PropTypes.string.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired
}
