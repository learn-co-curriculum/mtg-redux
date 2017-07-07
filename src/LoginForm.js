import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    this.props.onSubmit(this.state)
    this.setState({username: '', password: ''})
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name='username' placeholder='Username' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to write clean code.' />
        </Form.Field>
        <Button type='submit'>Log In</Button>
      </Form>

    )
  }
}

export default LoginForm
