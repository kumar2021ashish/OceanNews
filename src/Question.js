import React from 'react';

import Card from "react-bootstrap/Card";

const Question=({question,title}) =>{
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={question.imageurl} />
  <Card.Body>
    <Card.Title>{question.title}</Card.Title>
    <Card.Text>
    {question.description}
    </Card.Text>
    <p class="card-text"><small class="text-muted">Author : {question.author}</small></p>
    <p class="card-text"><small class="text-muted">Publish Date : {question.publishdate}</small></p>
  </Card.Body>
</Card>

    )
};

export default Question;