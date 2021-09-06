import React from 'react'
import Proptypes from "prop-types"

import {Form, Row, Col} from "react-bootstrap"

export const SearchForm = ({handleOnChange, str}) => {
    return (
        <div>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm="2">Search:{" "}</Form.Label>
                    <Col sm="10">
                    <Form.Control 
                    name="searchStr"
                    onChange={handleOnChange}
                    placeholder="Search..." />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    
        
    )
}

SearchForm.propTypes ={
    handleOnChange: Proptypes.func.isRequired,
    str: Proptypes.string.isRequired
}
