/**
 * Return a new Array without specified indexes.
 * @param {Iterable.<T>} list
 * @param {...number} indexes
 * @template T
 * @returns {Array.<T>}
 */
export const removeIndex = (list, ...indexes) => {
  return [...list].filter((item, index) => {
    return (indexes.indexOf(index) === -1)
  })
}

/**
 * Return an array with just unique values.
 * @param {Iterable.<T>} list
 * @template T
 * @returns {Array.<T>}
 */
export const unique = (list) => {
  const set = new Set([...list])
  const unique = [...set]
  return unique
}
