/**
 * @description format date
 * @param {Date} date
 * @param {String} type return type
 * @returns {String}
 */
export const formatDate = (date, type) => {
  date = new Date(date).getTime()
  const verifyTime = new Date(1970, 1, 1).getTime()

  if (verifyTime > date) {
    date *= 1000
  }
  date = new Date(date)

  const year = date.getFullYear()

  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month

  let day = date.getDate()
  day = day < 10 ? '0' + day : day

  let hour = date.getHours()
  hour = hour < 10 ? '0' + hour : hour

  let minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute

  let second = date.getSeconds()
  second = second < 10 ? '0' + second : second

  switch (type) {
    case 'mm-dd':
      return `${month}-${day}`
    case 'mm&dd':
      return `${month}月${day}日`
    case 'yy-mm-dd':
      return `${year}-${month}-${day}`
    case 'yy-mm-dd hh:mm':
      return `${year}-${month}-${day} ${hour}:${minute}`
    case 'yy&mm&dd':
      return `${year}年${month}月${day}日`
    case 'mm&dd hh:mm':
      return `${month}月${day}日 ${hour}:${minute}`
    case 'hh&mm':
      return `${hour}时${minute}分`
    case 'hh:mm':
      return `${hour}:${minute}`
    default:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
}
