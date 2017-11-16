const leftPad = (str, targetLen, padChar = '0') => {
  let len = `${str}`.length
  return targetLen > len ? `${padChar.repeat(targetLen - len)}${str}` : `${str}`
}

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
  let dateObj = new Date(unix)
  let year = dateObj.getFullYear(),
    month = months[dateObj.getMonth()].substr(0, 3),
    date = dateObj.getDate(),
    hours = leftPad(dateObj.getHours(), 2),
    minutes = leftPad(dateObj.getMinutes(), 2)

  return `${year}, ${month} ${date}, ${hours}:${minutes}`
}
