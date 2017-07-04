/**
 * Return a new Array without specified indexes.
 * @param {Iterable.<T>} list
 * @param {...number} indexes
 * @template T
 * @returns {Array.<T>}
 */
const removeIndex = (list, ...indexes) => {
  return [...list].filter((item, index) => {
    return (indexes.indexOf(index) === -1)
  })
}

exports.removeIndex = removeIndex
