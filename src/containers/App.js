import React, { Component } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { Section, Container } from 'bloomer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { syncSnapshot } from '../store/actions/entriesBySectionActions'
import { userAuthUpdate } from '../store/actions/userActions'

import {
  Redirect,
  PrivateRoute,
  PublicRoute,
  SimpleRoute
} from '../utils/router'

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
    let { userAuthUpdate, syncSnapshot } = this.props

    this.authUnsubscribe = authSubscribe(user => {
      userAuthUpdate(user)
      if (user) syncSnapshot('messages')
    })

    syncSnapshot('replies')
  }

  componentWillUnmount() {
    this.authUnsubscribe()
  }

  render() {
    let { isAuthenticated: authed } = this.props.user

    return (
      <Container style={{ width: '100%', maxWidth: '100%' }}>
        <Navbar authed={authed} />
        <Header authed={authed} />
        <Section tag="main">
          <Container>
            <Switch>
              <Redirect exact from="/" to="/submit/message" />
              <SimpleRoute path="/view" component={EntryListContainer} />
              <PublicRoute
                authed={authed}
                path="/submit/message"
                fallbackPath="/view/messages"
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
                fallbackPath="/view/messages"
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
