function lessThan (exclusiveMax) {
  return range(0, exclusiveMax);
}

function range (inclusiveMin, exclusiveMax) {
  return inclusiveMin + Math.floor(Math.random() * (exclusiveMax - inclusiveMin));
}

function excluding (exclusiveMax, excluded) {
  var id;

  do {
    id = lessThan(exclusiveMax);
  } while (excluded.includes(id));

  return id;
}

function dateWithinYear () {
  const today = new Date();
  const aYearAgo = today.setFullYear(today.getFullYear() - 1);

  return range(aYearAgo, Date.now());
}

module.exports = {
  dateWithinYear,
  excluding,
  lessThan,
  range
};
