function getSeason(dateStr) {
  const date = new Date(dateStr);
  const m = date.getMonth() + 1;
  const d = date.getDate();

  // console.log(m,d);

  if ((m === 6 && d >= 1) || (m > 6 && m < 9) || (m === 9 && d <= 15)) return 'peak';
  if ((m === 3 && d >= 1) || (m > 3 && m < 6) || (m === 9 && d >= 15 && d <= 30) || (m === 10)) return 'mid';
  return 'off';
}

module.exports = getSeason;
