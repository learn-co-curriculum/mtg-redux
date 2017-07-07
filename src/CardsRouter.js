import React from 'react'
import {Route} from 'react-router-dom'
import CardList from './CardList'
import CardShow from './CardShow'
import { Segment } from 'semantic-ui-react'

const CardsRouter = () => {
  return (
    <Segment>
      <Route exact path='/cards' component={CardList} />
      <Route path='/cards/:cardId' component={CardShow} />
    </Segment>
  )
}

export default CardsRouter
