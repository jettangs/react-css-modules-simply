'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _trim2 = require('lodash/trim');

var _trim3 = _interopRequireDefault(_trim2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleIndex = {};

exports.default = function (stylePropertyValue, allowMultiple) {
  var styles = void 0;

  if (styleIndex[stylePropertyValue]) {
    styles = styleIndex[stylePropertyValue];
  } else {
    styles = (0, _trim3.default)(stylePropertyValue).split(' ');
    styles = (0, _filter3.default)(styles);

    styleIndex[stylePropertyValue] = styles;
  }

  if (allowMultiple === false && styles.length > 1) {
    throw new Error('ReactElement style property defines multiple module names ("' + stylePropertyValue + '").');
  }

  return styles;
};

module.exports = exports['default'];