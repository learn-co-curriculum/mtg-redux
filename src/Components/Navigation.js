import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, Input} from 'semantic-ui-react'
const Navigation = ({logout}) => {
  const activeItem = 'home'

  return (
    <Menu pointing>
      <Menu.Item name='home' active={activeItem === 'home'}> <Link to='/'>Home </Link></Menu.Item>
      <Menu.Item name='cards' active={activeItem === 'cards'}> <Link to='/cards'>Cards </Link></Menu.Item>
      <Menu.Item name='login' active={activeItem === 'login'} ><Link to='/login'>Log In </Link></Menu.Item>
      <Menu.Item name='logout' onClick={logout} />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navigation
