module.exports = function hash(key, maxLength) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i ++) {
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % maxLength
  }
  return total;
}