"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
var SwitchModal = function SwitchModal() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  function toggle() {
    setIsVisible(!isVisible);
  }
  return {
    isVisible: isVisible,
    toggle: toggle
  };
};
var _default = SwitchModal;
exports.default = _default;