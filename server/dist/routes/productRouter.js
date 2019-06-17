"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productHandler = _interopRequireDefault(require("../Products/productHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route('/:id').get(_productHandler.default.getProductById);
router.route('/').get(_productHandler.default.getProducts).post(_productHandler.default.addProduct);
var _default = {
  router
};
exports.default = _default;