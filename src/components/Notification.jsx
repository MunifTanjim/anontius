import React from 'react'
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Notification,
  Delete
} from 'bloomer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { notify } from '../actions/notificationActions'

const NotificationHolder = ({ notification, notify, color = 'primary' }) => (
  <Modal isActive={notification.show}>
    <ModalBackground onClick={() => notify(false)} />
    <ModalContent>
      <Notification isColor={color}>
        <Delete onClick={() => notify(false)} />
        {notification.info}
      </Notification>
    </ModalContent>
    <ModalClose onClick={() => notify(false)} />
  </Modal>
)

const mapStateToProps = ({ notification }) => ({
  notification
})

const mapDispatchToProps = dispatch => bindActionCreators({ notify }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHolder)
