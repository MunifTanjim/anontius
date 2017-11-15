const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const formatDateTime = unix => {
  let date = new Date(unix)
  return `${date.getFullYear()}, ${months[date.getMonth()].substr(
    0,
    3
  )} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`
}
