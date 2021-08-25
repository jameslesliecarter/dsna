module.exports = function hash(key, maxLength) {
  let total = 0;
  for (let char in key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % maxLength
  }
  return total;
}