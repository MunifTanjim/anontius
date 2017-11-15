import React, { Component } from 'react'
import { Switch, Redirect, withRouter } from 'react-router-dom'
import { Section, Container } from 'bloomer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { syncSnapshot } from '../actions/entriesBySectionActions'
import { userAuthUpdate } from '../actions/userActions'

import { PrivateRoute, PublicRoute, SimpleRoute } from '../utils/router'

import EntryListContainer from '../containers/EntryListContainer'
import SubmissionContainer from '../containers/SubmissionContainer'
import LoginContainer from '../containers/LoginContainer'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Notification from '../components/Notification'

import { authSubscribe } from '../utils/firebaseAPI'

class App extends Component {
  componentDidMount() {
    this.authUnsubscribe = authSubscribe(user => {
      this.props.userAuthUpdate(user)
      if (user) this.props.syncSnapshot('messages')
    })

    this.props.syncSnapshot('replies')
  }

  componentWillUnmount() {
    this.authUnsubscribe()
  }

  render() {
    let authed = this.props.user.authenticated

    return (
      <Container style={{ width: '100%', maxWidth: '100%' }}>
        <Navbar authed={authed} />
        <Header authed={authed} />
        <Section tag="main">
          <Container>
            <Switch>
              <Redirect exact from="/" to="/submit/message" />
              <SimpleRoute path="/show" component={EntryListContainer} />
              <PublicRoute
                authed={authed}
                path="/submit/message"
                fallbackPath="/show/messages"
                component={SubmissionContainer}
                type="message"
              />
              <PrivateRoute
                authed={authed}
                path="/submit/reply/:key"
                fallbackPath="/login"
                component={SubmissionContainer}
                type="reply"
              />
              <PublicRoute
                authed={authed}
                path="/login"
                fallbackPath="/show/messages"
                component={LoginContainer}
              />
            </Switch>
          </Container>
        </Section>
        <Footer />
        <Notification />
      </Container>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userAuthUpdate, syncSnapshot }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
