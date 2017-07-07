import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const SingleCard = ({imageUrl, name, multiverseid}) => {
  const cardLink = `/cards/${multiverseid}`
  return (
    <Card>
      <Image src={imageUrl} />
      <Card.Content extra>
        <a><Icon name='heart' />Add to collection</a>
      </Card.Content>
    </Card>
  )
}

export default SingleCard
