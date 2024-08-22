"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomModal = function CustomModal(_ref) {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    message = _ref.message;
  return /*#__PURE__*/_react["default"].createElement(_material.Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "custom-modal-title",
    "aria-describedby": "custom-modal-description"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    sx: {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    p: 4,
    borderRadius: 2,
    bgcolor: "white",
    boxShadow: 24,
    textAlign: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    id: "custom-modal-title",
    variant: "h6"
  }, message), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleClose,
    sx: {
      marginTop: 2
    }
  }, "Fermer"))));
};
var _default = exports["default"] = CustomModal;