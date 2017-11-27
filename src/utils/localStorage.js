export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('anontius')
    return serializedState !== null ? JSON.parse(serializedState) : undefined
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('anontius', serializedState)
  } catch (err) {}
}
