"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

require("./config/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // parse application/json

app.use(_bodyParser.default.json()); // parse application/x-www-form-urlencoded

app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/api/v1', _routes.default.router);
app.get('/', function (req, res) {
  res.json([{
    title: "Server app",
    description: "This is the server app.",
    message: "The API endpoint is /api/v1"
  }]);
});
app.listen(process.env.SERVER_PORT, () => console.log(`Server started on port ${process.env.SERVER_PORT}`));