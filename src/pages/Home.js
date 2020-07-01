import './Home.css';

import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Image className="title" src="/static/media/title.422b5544.png" rounded />
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Who am I?</Card.Title>
              <Card.Text>A passionate coder who enjoys learning new ways to code, improving how I work, and making games.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>What am I working on right now?</Card.Title>
              <Card.Text>Finished my Computer Science bachelor's degree, and working on as many side projects as possible.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>What can you find here?</Card.Title>
              <Card.Text>Many of favourite projects that I enjoyed working on! Some even have source code!</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default Home
