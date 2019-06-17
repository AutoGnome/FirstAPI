"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../config/env");

var _connection = _interopRequireDefault(require("../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUsers = async () => {
  return await (0, _connection.default)('users').select('*');
};

const getUserById = async id => {
  return await (0, _connection.default)('users').where({
    id: id
  });
};

const addUser = async (name, email) => {
  return await (0, _connection.default)('users').insert({
    name: name,
    email: email
  });
};

var _default = {
  getUsers,
  getUserById,
  addUser
};
exports.default = _default;