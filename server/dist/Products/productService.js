"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productQueries = _interopRequireDefault(require("./productQueries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProductById = async id => {
  return await _productQueries.default.getProductById(id);
};

const getProducts = async () => {
  return await _productQueries.default.getProducts();
};

const addProduct = async (name, email) => {
  await _productQueries.default.addProduct(name, description, price);
};

var _default = {
  getProductById,
  getProducts,
  addProduct
};
exports.default = _default;