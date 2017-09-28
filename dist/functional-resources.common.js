'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Get all element's parents.
 * @param {HTMLElement} element
 * @returns {HTMLElement[]}
 */
var getParents = function (element) {
  var parent = element.parentElement;
  var parents = !parent ? [] : [parent ].concat( getParents(parent));
  return parents
};


var DOM = Object.freeze({
	getParents: getParents
});

/**
 * Return a new Array without specified indexes.
 * @param {Iterable.<T>} list
 * @param {...number} indexes
 * @template T
 * @returns {Array.<T>}
 */
var removeIndex = function (list) {
  var indexes = [], len = arguments.length - 1;
  while ( len-- > 0 ) indexes[ len ] = arguments[ len + 1 ];

  return [].concat( list ).filter(function (item, index) {
    return (indexes.indexOf(index) === -1)
  })
};

/**
 * Return an array with just unique values.
 * @param {Iterable.<T>} list
 * @template T
 * @returns {Array.<T>}
 */
var unique = function (list) {
  var set = new Set([].concat( list ));
  var unique = [].concat( set );
  return unique
};


var list = Object.freeze({
	removeIndex: removeIndex,
	unique: unique
});

exports.DOM = DOM;
exports.list = list;
