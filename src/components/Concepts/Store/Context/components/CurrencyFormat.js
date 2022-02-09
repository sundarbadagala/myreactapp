export const CurrencyFormat = (value) =>
  new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'INR'}).format(value);