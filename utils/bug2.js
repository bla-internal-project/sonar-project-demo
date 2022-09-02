const bugTwo = () => {
  const number = 5
  const stringNumber = '5'
  if (number == stringNumber) {
    return 'This is not going to be shown.'
  }
  return 'This will always be shown.'
}

module.exports = bugTwo
