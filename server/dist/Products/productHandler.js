"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productService = _interopRequireDefault(require("./productService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProductById = async (req, res, next) => {
  const {
    id
  } = req.params;

  try {
    res.json((await _productService.default.getProductById(id)));
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    res.json((await _productService.default.getProducts()));
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    res.json((await _productService.default.addProduct(name, description, price)));
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

var _default = {
  getProductById,
  getProducts,
  addProduct
};
exports.default = _default;