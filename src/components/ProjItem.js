import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/button';

export class ProjItem extends Component {

  onClick = (e) => {
    this.props.setShow(true);
    this.props.setShowNum(this.props.proj.id);
  }

  render() {
    return (
      <Card className="cus-card" style={{ width: '18rem' }}>
        <Card.Img className="cover" variant="top" src={require('../data/pictures/'+this.props.proj.name+'/0.png')} />
        <Card.Body>
          <Card.Title>{this.props.proj.name}</Card.Title>
          <Card.Text>{this.props.proj.description}</Card.Text>
          <Button variant="primary" onClick={this.onClick}>More</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ProjItem
