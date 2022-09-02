const bugFour = (transaction) => {
  const result = {
    price: transaction.asset && transaction.value.asset,
    currency: transaction.currency,
  }
  return result
}

module.exports = bugFour
