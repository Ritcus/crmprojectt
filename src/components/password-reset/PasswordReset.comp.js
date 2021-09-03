import React from 'react';

import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const ResetPassword = ({handleOnChange, frmSwitcher, handleOnResetSubmit, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text info text-centre">Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            value={email}
                            placeholder="Enter Email"
                            required
                        />
                    </Form.Group>
                    
                    <p />
                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={ () =>frmSwitcher('login')}> Forget Password </a>
                </Col>

            </Row>

        </Container>
    );
};

ResetPassword.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
};