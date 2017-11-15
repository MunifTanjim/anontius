import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button } from 'bloomer'

import LoginForm from '../components/Forms/Login'

import { notify } from '../actions/notificationActions'
import { login } from '../actions/userActions'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      pass: '',
      valid: {
        email: true,
        pass: true
      }
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()

    let { email, pass } = this.state
    let { login, notify } = this.props

    let valid = this.handleValidation()

    if (valid)
      login(email, pass).catch(err => {
        notify(true, err.code)
      })
  }

  handleChange(e) {
    e.preventDefault()
    let name = e.target.name,
      value = e.target.value

    this.setState({
      [name]: value
    })
  }

  handleValidation() {
    let { email, pass } = this.state

    this.setState({
      valid: {
        email: !!email,
        pass: !!pass
      }
    })

    return email && pass
  }

  render() {
    return this.props.user.isProcessing ? (
      <Container isFluid hasTextAlign="centered">
        <Button isLoading isSize="large" isColor="white" />
      </Container>
    ) : (
      <LoginForm
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}
        valid={this.state.valid}
      />
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ notify, login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
