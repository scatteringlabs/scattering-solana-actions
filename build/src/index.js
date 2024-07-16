"use strict";

var _process$env;
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var node_server_1 = require("@hono/node-server");
var route_1 = __importDefault(require("./scattering/route"));
var cors_1 = require("hono/cors");
var swagger_ui_1 = require("@hono/swagger-ui");
var zod_openapi_1 = require("@hono/zod-openapi");
var app = new zod_openapi_1.OpenAPIHono();
app.use((0, cors_1.cors)({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));
// <--Actions-->
app.route('/blink-api', route_1["default"]);
// </--Actions-->
app.doc('/doc', {
  info: {
    title: 'An API',
    version: 'v1'
  },
  openapi: '3.1.0'
});
app.get('/swagger-ui', (0, swagger_ui_1.swaggerUI)({
  url: '/doc'
}));
var port = Number((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.PORT) || 3000;
console.log("Server is running on port ".concat(port, "\nVisit http://localhost:").concat(port, "/swagger-ui to explore existing actions\nVisit https://actions.dialect.to to unfurl action into a Blink\n"));
(0, node_server_1.serve)({
  fetch: app.fetch,
  port: port
});