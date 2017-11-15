let { ...env } = process.env

export const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

export const appTitle = env.REACT_APP_TITLE

export const headerConfig = {
  show: {
    messages: {
      title: 'Messages',
      subtitle: ''
    },
    replies: {
      title: 'Replied Messages',
      subtitle: ''
    }
  },
  submit: {
    message: {
      title: 'Send Message',
      subtitle: 'Anonymously'
    },
    reply: {
      title: 'Reply to Message',
      subtitle: ''
    }
  },
  login: {
    title: 'Login',
    subtitle: 'Anontius'
  }
}

export const notificationConfig = {
  message: {
    empty: 'Empty Message!',
    error: "Can't Send!",
    processing: 'Sending...',
    reset: "You're no fun, are you?",
    success: 'Sent!'
  },
  reply: {
    empty: 'Empty Answer!',
    error: "Can't Answer!",
    processing: 'Answering...',
    success: 'Answered!'
  }
}
export const formConfig = {
  message: {
    buttonText: {
      reset: 'Clear',
      submit: 'Send'
    },
    placeholder: 'Write your message...'
  },
  reply: {
    buttonText: {
      reset: 'Cancel',
      submit: 'Reply'
    },
    placeholder: 'Reply to message...'
  }
}

export const social = {
  facebook: 'https://facebook.com/MunifTanjim',
  github: 'https://github.com/MunifTanjim',
  twitter: 'https://twitter.com/MunifTanjim'
}

export const homeURL = 'https://muniftanjim.com'
