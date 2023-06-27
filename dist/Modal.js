"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./Modal.css");
var _excluded = ["isVisible", "hide", "title", "size"];
var Modal = function Modal(_ref) {
  var isVisible = _ref.isVisible,
    hide = _ref.hide,
    title = _ref.title,
    size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return isVisible ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: hide,
    className: "modalOverlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: size === "small" ? "modalSmall" : "modalBig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBody"
  }, props.children), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modalCloseButton",
    onClick: hide
  }, "CLOSE")))))), document.body) : null;
};
Modal.prototypes = {
  isVisible: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = Modal;
exports.default = _default;