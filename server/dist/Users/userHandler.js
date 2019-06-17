"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userService = _interopRequireDefault(require("./userService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserById = async (req, res, next) => {
  const {
    id
  } = req.params;

  try {
    res.json((await _userService.default.getUserById(id)));
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    res.json((await _userService.default.getUsers()));
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    res.json((await _userService.default.addUser(name, email)));
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

var _default = {
  getUserById,
  getUsers,
  addUser
};
exports.default = _default;