const codeSmellThree = (value) => {
  if (value.birthday) {
    value.birthday = String(value.birthday.toISOString()).substr(0, 10)
  }
  return value
}

module.exports = codeSmellThree
