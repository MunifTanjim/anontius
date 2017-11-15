import React from 'react'
import { connect } from 'react-redux'
import { Switch, Redirect } from 'react-router-dom'

import { PrivateRoute, SimpleRoute } from '../utils/router'

import EntryList from '../components/EntryList'

const EntryListContainer = ({ authed, entriesBySection }) => (
  <Switch>
    <Redirect exact from="/show" to="/show/replies" />
    <SimpleRoute
      path="/show/replies"
      component={EntryList}
      entries={entriesBySection['replies'].entries}
      isUpdating={entriesBySection['replies'].isUpdating}
      section="replies"
    />
    <PrivateRoute
      authed={authed}
      path="/show/messages"
      fallbackPath="/login"
      component={EntryList}
      entries={entriesBySection['messages'].entries}
      isUpdating={entriesBySection['messages'].isUpdating}
      section="messages"
    />
  </Switch>
)

const mapStateToProps = ({ entriesBySection, user }) => ({
  authed: user.authenticated,
  entriesBySection
})

export default connect(mapStateToProps)(EntryListContainer)
