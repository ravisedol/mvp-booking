function dateOverlap(startA, endA, startB, endB) {
  return new Date(startA) < new Date(endB) && new Date(startB) < new Date(endA);
}

module.exports = { dateOverlap };