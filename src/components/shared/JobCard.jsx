import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobCard({title, description, image, linkedIn}) {
  return (
    // <div>{description}
    // <img src={image}/>
    // </div>
    
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text >
          {description}
        </Card.Text>
        <Button  target="_blank" href = {linkedIn} variant="primary">Link</Button>
      </Card.Body>
    </Card>
  )
}

export default JobCard