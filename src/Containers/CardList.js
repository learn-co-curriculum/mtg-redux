import React, { Component } from 'react'
import SingleCard from '../Components/Card'
import CardFactory from '../HOCs/CardFactory'
import { Dimmer, Loader, Card} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getCards } from '../Actions-Creators/index'
// cards array from redux
class CardsList extends Component {
  componentWillMount () {
    console.log('Mounting')
    this.props.fetchCards()
  }
  componentWillReceiveProps () {
    console.log('props')
  }
  loading () {
    console.log(this.props)
    if (this.props.cards) {
      const cardsList = this.props.cards.map(card => <SingleCard {...card} key={card.multiverseid} />)
      return (<Card.Group itemsPerRow={6}> {cardsList} </Card.Group>)
    } else {
      return (<Dimmer active><Loader /></Dimmer>)
    }
  }
  render () {
    return (this.loading())
  }
}

const mapStateToProps = (state) => {
  console.log('mapping', state, arguments)
  // whatever gets returned from here will be the components props
  return {cards: state.cards}
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => {
      dispatch(getCards())
    }
  }
}

// wrapped component creation, not need due to mapping state from redux
// const WrappedCardList = CardFactory(CardsList)
// redux will update state and set the god state to props cards
export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
