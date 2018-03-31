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

// white light dark black primary info success warning danger
export const accentColor = 'primary'

export const social = {
  facebook: env.REACT_APP_SOCIAL_FACEBOOK,
  github: env.REACT_APP_SOCIAL_GITHUB,
  twitter: env.REACT_APP_SOCIAL_TWITTER
}

export const homeURL = env.REACT_APP_HOMEPAGE_URL
