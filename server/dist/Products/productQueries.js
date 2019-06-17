"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../config/env");

var _connection = _interopRequireDefault(require("../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProducts = async () => {
  return await (0, _connection.default)('products').select('*');
};

const getProductById = async id => {
  return await (0, _connection.default)('products').where({
    id: id
  });
};

const addProduct = async (name, description, price) => {
  return await (0, _connection.default)('products').insert({
    name: name,
    description: description,
    price: price
  });
};

var _default = {
  getProducts,
  getProductById,
  addProduct
};
exports.default = _default;