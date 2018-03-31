import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, NavbarItem } from 'bloomer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'

import { logout } from '../../store/actions/userActions'

import Icon from '../Icon'

const handleLogout = (e, logout) => {
  e.preventDefault()
  logout()
}

const DashButton = ({ authed, logout, t }) =>
  authed ? (
    <NavbarItem
      tag="a"
      style={{ marginLeft: 'auto' }}
      onClick={e => handleLogout(e, logout)}
    >
      <Heading
        tag="span"
        isHidden="touch"
        style={{ marginBottom: 0, marginRight: 8 }}
      >
        {t('navbar.logout')}
      </Heading>
      <Icon name="log-out" />
    </NavbarItem>
  ) : (
    <NavbarItem
      style={{ marginLeft: 'auto' }}
      render={props => <Link to="/login" {...props} />}
    >
      <Heading
        tag="span"
        isHidden="touch"
        style={{ marginBottom: 0, marginRight: 8 }}
      >
        {t('navbar.login')}
      </Heading>
      <Icon name="log-in" />
    </NavbarItem>
  )

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(translate()(DashButton))
