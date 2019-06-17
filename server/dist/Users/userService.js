"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userQueries = _interopRequireDefault(require("./userQueries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserById = async id => {
  return await _userQueries.default.getUserById(id);
};

const getUsers = async () => {
  return await _userQueries.default.getUsers();
};

const addUser = async (name, email) => {
  await _userQueries.default.addUser(name, email);
};

var _default = {
  getUserById,
  getUsers,
  addUser
};
exports.default = _default;