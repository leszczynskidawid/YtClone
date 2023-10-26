const formatNumber = (number) => {
  const roundedNumber = Math.round(number / 100000);
  return number >= 1000 ? `${roundedNumber}tys.` : number;
};
export { formatNumber };
