import React from 'react'
import {Route} from 'react-router-dom'
import CardList from '../Containers/CardList'
import CardShow from '../Components/CardShow'
import { Segment } from 'semantic-ui-react'

const CardsRouter = () => {
  return (
    <div>
      <Segment>
        <Route exact path='/cards' component={CardList} />
      </Segment>
      <Route path='/cards/:cardId' component={CardShow} />
    </div>
  )
}

export default CardsRouter
