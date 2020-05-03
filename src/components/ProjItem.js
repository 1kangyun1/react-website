import React, { Component } from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import ExpandItem from './ExpandItem';


export class ProjItem extends Component {
  render() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.proj.name}</Card.Title>
          <Card.Text>{this.props.proj.description}</Card.Text>
          <Button variant="primary"onClick={() => setModalShow(true)}>More</Button>
          <ExpandItem show={modalShow} 
            onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    )
  }
}

export default ProjItem
