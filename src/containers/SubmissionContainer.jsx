import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { notify } from '../store/actions/notificationActions'

import { postMessage, postReply } from '../utils/firebaseAPI'

import Form from '../components/Form'

function handlePostError(err) {
  this.setProcessing(false)
  this.notify(true, `${this.notification('error')} [${err.code}]`)
}

function handlePostSuccess() {
  this.setProcessing(false)
  this.clearData()
  this.notify(true, this.notification('success'))
}

class SubmissionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      isProcessing: false
    }

    this.notify = this.props.notify

    this.handlePostError = handlePostError.bind(this)
    this.handlePostSuccess = handlePostSuccess.bind(this)

    this.clearData = this.clearData.bind(this)
    this.setProcessing = this.setProcessing.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleDataReset = this.handleDataReset.bind(this)
    this.handleDataSubmit = this.handleDataSubmit.bind(this)

    this.notification = this.notification.bind(this)
  }

  notification(key) {
    return `notification.${this.props.type}.${key}`
  }

  clearData() {
    this.setState({
      data: ''
    })
  }

  setProcessing(status) {
    this.setState({
      isProcessing: status
    })
  }

  handleDataChange(e) {
    this.setState({
      data: e.target.value
    })
  }

  handleDataSubmit(e, message = null) {
    e.preventDefault()

    let { data } = this.state

    if (data) {
      this.setProcessing(true)
      this.notify(true, this.notification('processing'))

      if (this.props.type === 'reply') {
        postReply(data, message, this.props.match.params.key)
          .then(data => this.handlePostSuccess())
          .catch(err => this.handlePostError(err))
      } else {
        postMessage(data)
          .then(data => this.handlePostSuccess())
          .catch(err => this.handlePostError(err))
      }
    } else {
      this.notify(true, this.notification('empty'))
    }
  }

  handleDataReset(e) {
    e.preventDefault()

    this.clearData()
    this.notify(true, this.notification('reset'))
  }

  render() {
    console.log(this.notification('reset'))
    return (
      <Form
        type={this.props.type}
        messageKey={this.props.match.params.key}
        data={this.state.data}
        handleDataChange={this.handleDataChange}
        handleDataSubmit={this.handleDataSubmit}
        handleDataReset={this.handleDataReset}
        isProcessing={this.state.isProcessing}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ notify }, dispatch)

export default connect(null, mapDispatchToProps)(SubmissionContainer)
