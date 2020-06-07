import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export class ExpandItem extends Component {
  onHide = (e) => {
    this.props.setShow(false);
  }

  createCarousel = () => {
    let images = []

    for (let i = 0; i < this.props.proj.numImages; i++) {
      images.push(<Carousel.Item>
                    <img className="d-block w-100" 
                         src={require('../data/pictures/'+this.props.proj.name+'/'+String(i)+'.png')} 
                         alt=''/>
                  </Carousel.Item>)
    }

    return images
  }

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={this.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.proj.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {this.createCarousel()}
          </Carousel>
          {this.props.proj.description}
        </Modal.Body>
      </Modal>
    )
  }
}

export default ExpandItem
