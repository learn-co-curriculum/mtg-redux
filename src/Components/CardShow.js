import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { getCard } from '../Actions-Creators/index'

class CardShow extends Component {
  loading () {
    if (this.props.card) {
      return <Card {...this.props.card} key={this.props.card.multiverseid} />
    } else {
      return <h2>Loading...</h2>
    }
  }
  render () {
    return (
      <div>
        { this.loading() }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    card: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: (id) => {
      dispatch(getCard(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardShow)
