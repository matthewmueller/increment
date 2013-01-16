/**
 * Expose increment
 */

module.exports = increment;

/**
 * Increment
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

function increment(str, prefix) {
  prefix = prefix || '';
  var digits = new RegExp(escape(prefix) + '(\\d+$)');
      match = str.match(digits);
  if (!match) return str + prefix + 1;
  return str.substr(0, match.index) + prefix + (++match[1]);
}

/**
 * Escape a regex string
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function escape(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
