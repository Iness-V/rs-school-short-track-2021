/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(address) {
  const isLengthCorrect = address.length === 17;
  const addressArray = address.split('-');
  const isGroupCountCorrect = addressArray.length === 6;
  const isAllGroupCorrect = addressArray.every((group) => {
    if (group.length !== 2) {
      return false;
    }
    const regexp = /[0-9A-F][0-9A-F]/;
    return regexp.test(group);
  });
  return isLengthCorrect && isGroupCountCorrect && isAllGroupCorrect;
}

module.exports = isMAC48Address;
