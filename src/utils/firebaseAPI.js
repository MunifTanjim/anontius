import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import { firebaseConfig as config } from '../config'

const firebaseApp = firebase.initializeApp(config)

const auth = firebaseApp.auth()
const db = firebaseApp.database()
const ref = db.ref()

export const postMessage = (message) => {
  let data = {
    message,
    receivedAt: firebase.database.ServerValue.TIMESTAMP,
  }

  let key = ref.child('messages').push().key

  let updates = {
    [`/messages/${key}`]: data,
  }

  return ref.update(updates)
}

export const postReply = (reply, message, key) => {
  let data = {
    ...message,
    messageKey: key,
    reply: reply,
    repliedAt: firebase.database.ServerValue.TIMESTAMP,
  }

  let replyKey = ref.child('replies').push().key

  let updates = {
    [`/messages/${key}/replied`]: true,
    [`/replies/${replyKey}`]: data,
  }

  return ref.update(updates)
}

export const firebaseLogin = (email, pass) =>
  auth.signInWithEmailAndPassword(email, pass)

export const firebaseLogout = () => auth.signOut()

export const authSubscribe = (callback) => auth.onAuthStateChanged(callback)

export const syncSnapshotSubscribe = (
  section,
  startKey,
  requestCallback,
  successCallback,
  failureCallback
) => {
  requestCallback(section)
  let syncRef = ref.child(section).orderByKey()
  if (startKey) {
    syncRef = ref.startAt(startKey)
  }
  syncRef.on(
    'value',
    (snapshot) => {
      successCallback(section, snapshot)
    },
    (err) => {
      failureCallback(section, err)
    }
  )
}
