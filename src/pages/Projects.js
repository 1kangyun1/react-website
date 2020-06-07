import './Projects.css';

import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjItem from '../components/ProjItem';
import ExpandItem from '../components/ExpandItem';

export class Projects extends Component {
  state = {
    showNum: -1,
    show: false
  }

  setShow = (bool) => {
    this.setState({show: bool});
  }

  setShowNum = (num) => {
    this.setState({showNum: num});
  }

  createDecks = () => {
    let decks = []
    let cards = []
    let counter = 0

    // eslint-disable-next-line 
    this.props.projs.map((proj) => {
      counter++
      
      cards.push(<ProjItem key={proj.id} proj={proj} 
                           setShow={this.setShow}
                           setShowNum={this.setShowNum}/>)

      if(this.props.projs.length === counter || counter % 3 === 0){
        decks.push(<CardDeck className="cus-card-deck">
                    {cards}
                   </CardDeck>)
        cards = []
      }
    })
    return decks
  }

  render() {
    return (
      <React.Fragment>
        {this.props.projs.map((proj) => {
          if(proj.id === this.state.showNum && this.state.show){
            return <ExpandItem proj={proj}
                               show={this.state.show}
                               setShow={this.setShow}/>
          }
          return null;
        })}
        {this.createDecks()}
      </React.Fragment>
    )
  }
}

export default Projects
