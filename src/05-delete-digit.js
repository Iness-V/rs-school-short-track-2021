/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let minPosition;
  let minDigit = n.toString()[0];
  let arr = n.toString().split('');
  arr.forEach((element, i) => {
    if (element < minDigit) {
      minDigit = element;
      minPosition = i;
    }
  });
  arr.splice(minPosition, 1);
  arr = arr.join('');
  arr = Number.parseInt(arr, 10);
  return arr;
}

module.exports = deleteDigit;
