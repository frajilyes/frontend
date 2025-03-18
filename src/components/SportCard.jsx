import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const SportCard = ({sport}) => {
  return (
    <Card style={{display:'inline-block', width: '21rem'}}>
    <Card.Header><b>World of sports</b></Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{sport.title}</ListGroup.Item>
      <ListGroup.Item>{sport.description}</ListGroup.Item>
      <ListGroup.Item>{sport.dueDate}</ListGroup.Item>
      <ListGroup.Item>{sport.status}</ListGroup.Item>
    </ListGroup>
  </Card>
  )
}

export default SportCard;