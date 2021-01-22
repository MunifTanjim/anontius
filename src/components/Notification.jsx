import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Notification,
} from 'bloomer'

import { notify } from '../store/actions/notificationActions'

import { accentColor } from '../config'

const NotificationHolder = ({ notification, notify }) => {
  const { t } = useTranslation()

  return (
    <Modal isActive={notification.show}>
      <ModalBackground onClick={() => notify(false)} />
      <ModalContent>
        <Notification isColor={accentColor}>
          {t(notification.info)}
        </Notification>
      </ModalContent>
      <ModalClose onClick={() => notify(false)} />
    </Modal>
  )
}

const mapStateToProps = ({ notification }) => ({
  notification,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ notify }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHolder)
