import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Notification
} from 'bloomer'

import { notify } from '../actions/notificationActions'

import { accentColor } from '../utils/config'

const NotificationHolder = ({ notification, notify }) => (
  <Modal isActive={notification.show}>
    <ModalBackground onClick={() => notify(false)} />
    <ModalContent>
      <Notification isColor={accentColor}>{notification.info}</Notification>
    </ModalContent>
    <ModalClose onClick={() => notify(false)} />
  </Modal>
)

const mapStateToProps = ({ notification }) => ({
  notification
})

const mapDispatchToProps = dispatch => bindActionCreators({ notify }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHolder)
