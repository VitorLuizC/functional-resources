/**
 * Get all element's parents.
 * @param {HTMLElement} element
 * @returns {HTMLElement[]}
 */
export const getParents = (element) => {
  const parent = element.parentElement
  const parents = !parent ? [] : [parent, ...getParents(parent)]
  return parents
}
