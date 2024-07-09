"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const route_1 = __importDefault(require("./scattering/route"));
const cors_1 = require("hono/cors");
const swagger_ui_1 = require("@hono/swagger-ui");
const zod_openapi_1 = require("@hono/zod-openapi");
const app = new zod_openapi_1.OpenAPIHono();
app.use('/*', (0, cors_1.cors)());
// <--Actions-->
app.route('/api', route_1.default);
// </--Actions-->
app.doc('/doc', {
    info: {
        title: 'An API',
        version: 'v1',
    },
    openapi: '3.1.0',
});
app.get('/swagger-ui', (0, swagger_ui_1.swaggerUI)({
    url: '/doc',
}));
const port = 3000;
console.log(`Server is running on port ${port}
Visit http://localhost:${port}/swagger-ui to explore existing actions
Visit https://actions.dialect.to to unfurl action into a Blink
`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port,
});
