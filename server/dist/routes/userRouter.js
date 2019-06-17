"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userHandler = _interopRequireDefault(require("../Users/userHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route('/:id').get(_userHandler.default.getUserById);
router.route('/').get(_userHandler.default.getUsers).post(_userHandler.default.addUser);
var _default = {
  router
};
exports.default = _default;