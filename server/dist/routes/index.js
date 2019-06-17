"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRouter = _interopRequireDefault(require("./userRouter"));

var _productRouter = _interopRequireDefault(require("./productRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/users', _userRouter.default.router);
router.use('/products', _productRouter.default.router);
var _default = {
  router
};
exports.default = _default;