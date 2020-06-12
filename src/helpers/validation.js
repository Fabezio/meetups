export function isEmpty(val) {
  return val.trim().length === 0
}

export function isValidEmail(val) {
  // standard email regex
  const emailRegex = "[a - z0 - 9!#$%& '*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  return RegExp(emailRegex).test(val)
}