import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SportCard = ({sport}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{sport.title}</Card.Title>
        <Card.Text>{sport.description}</Card.Text>
        <Card.Text>{sport.dueDate}</Card.Text>
        <Card.Text>{sport.status}</Card.Text>
        <Button variant="primary">update</Button>
      </Card.Body>
    </Card>

  )
}

export default SportCard;