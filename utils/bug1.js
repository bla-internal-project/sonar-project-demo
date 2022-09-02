const bugOne = (boolConst) => {
  if (boolConst === true || boolConst === 'true') {
    result = 'True'
  }
  return result
}

module.exports = bugOne(boolConst, 'false')
