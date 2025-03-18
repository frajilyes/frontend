import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Authpage = () => {
  return (
    <div className='Auth'>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label><b>Username :</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label><b>Password :</b></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <Button variant="success">Login</Button>
    </div>
  );
}

export default Authpage