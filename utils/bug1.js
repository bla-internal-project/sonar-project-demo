const bugOne = (boolVConst) => {
  let result = 'False'
  if (boolVConst === true || boolVConst === 'true') {
    result = 'True'
  }
  return result
}

module.exports = bugOne
