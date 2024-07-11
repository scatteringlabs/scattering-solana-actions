"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var zod_openapi_1 = require("@hono/zod-openapi");
var openapi_1 = require("../openapi");
var scattering_api_1 = require("./scattering-api");
var jupiter_api_1 = __importDefault(require("../jupiter-swap/jupiter-api"));
var puppeteer_1 = __importDefault(require("puppeteer"));
var app = new zod_openapi_1.OpenAPIHono();
var SWAP_AMOUNT_USD_OPTIONS = [{
  lable: '0.1SOL',
  amount: 0.1
}, {
  lable: '0.5SOL',
  amount: 0.5
}, {
  lable: '1SOL',
  amount: 1
}];
app.openapi((0, zod_openapi_1.createRoute)({
  method: 'get',
  path: 'buy/{slug}',
  tags: ['Scattering Swap'],
  request: {
    params: zod_openapi_1.z.object({
      slug: zod_openapi_1.z.string().openapi({
        param: {
          name: 'slug',
          "in": 'path'
        },
        type: 'string',
        example: 'abble_spl404'
      })
    })
  },
  body: openapi_1.actionSpecOpenApiPostRequestBody,
  responses: openapi_1.actionsSpecOpenApiGetResponse
}), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(c) {
    var _collectionInfo$data, _collectionInfo$data2, _collectionInfo$data3, _collectionInfo$data4, _collectionInfo$data5, slug, collectionInfo, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          slug = c.req.param('slug');
          _context.next = 4;
          return (0, scattering_api_1.getCollectionBySlug)({
            slug: slug
          });
        case 4:
          collectionInfo = _context.sent;
          response = {
            icon: "https://d2oiecgevbfxbl.cloudfront.net/images/550x550/freeze=false/https://static.crystalvault.io/logo/solana/assets/".concat(collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data = collectionInfo.data) === null || _collectionInfo$data === void 0 || (_collectionInfo$data = _collectionInfo$data.item) === null || _collectionInfo$data === void 0 ? void 0 : _collectionInfo$data.erc20_address, "/logo.png"),
            label: collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data2 = collectionInfo.data) === null || _collectionInfo$data2 === void 0 || (_collectionInfo$data2 = _collectionInfo$data2.item) === null || _collectionInfo$data2 === void 0 ? void 0 : _collectionInfo$data2.name,
            title: collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data3 = collectionInfo.data) === null || _collectionInfo$data3 === void 0 || (_collectionInfo$data3 = _collectionInfo$data3.item) === null || _collectionInfo$data3 === void 0 ? void 0 : _collectionInfo$data3.name,
            description: collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data4 = collectionInfo.data) === null || _collectionInfo$data4 === void 0 || (_collectionInfo$data4 = _collectionInfo$data4.item) === null || _collectionInfo$data4 === void 0 ? void 0 : _collectionInfo$data4.description,
            links: {
              actions: [].concat(_toConsumableArray(SWAP_AMOUNT_USD_OPTIONS.map(function (_ref2) {
                var lable = _ref2.lable,
                  amount = _ref2.amount;
                return {
                  label: "".concat(lable),
                  href: "/blink-api/buy/".concat(slug, "/").concat(amount)
                };
              })), [{
                href: "/blink-api/buy/".concat(slug, "/{amount}"),
                label: "Buy ".concat(collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data5 = collectionInfo.data) === null || _collectionInfo$data5 === void 0 || (_collectionInfo$data5 = _collectionInfo$data5.item) === null || _collectionInfo$data5 === void 0 ? void 0 : _collectionInfo$data5.symbol),
                parameters: [{
                  name: 'amount',
                  label: 'Enter a custom SOL amount'
                }]
              }])
            }
          };
          return _context.abrupt("return", c.json(response));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('error', _context.t0);
          return _context.abrupt("return", c.json({}));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
app.openapi((0, zod_openapi_1.createRoute)({
  method: 'post',
  path: 'buy/{slug}/{amount}',
  tags: ['Scattering Swap'],
  request: {
    params: zod_openapi_1.z.object({
      slug: zod_openapi_1.z.string().openapi({
        param: {
          name: 'slug',
          "in": 'path'
        },
        type: 'string',
        example: 'abble_spl404'
      })
    })
  },
  responses: openapi_1.actionsSpecOpenApiGetResponse
}), /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(c) {
    var _collectionInfo$data6, slug, collectionInfo, amount, amountInLamports, _yield$c$req$json, account, quote, swapResponse, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          slug = c.req.param('slug');
          _context2.next = 4;
          return (0, scattering_api_1.getCollectionBySlug)({
            slug: slug
          });
        case 4:
          collectionInfo = _context2.sent;
          amount = c.req.param('amount');
          amountInLamports = Math.floor(parseFloat(amount) * 1000000000);
          _context2.next = 9;
          return c.req.json();
        case 9:
          _yield$c$req$json = _context2.sent;
          account = _yield$c$req$json.account;
          _context2.next = 13;
          return jupiter_api_1["default"].quoteGet({
            inputMint: 'So11111111111111111111111111111111111111112',
            outputMint: collectionInfo === null || collectionInfo === void 0 || (_collectionInfo$data6 = collectionInfo.data) === null || _collectionInfo$data6 === void 0 || (_collectionInfo$data6 = _collectionInfo$data6.item) === null || _collectionInfo$data6 === void 0 ? void 0 : _collectionInfo$data6.erc20_address,
            amount: Number(amountInLamports),
            autoSlippage: true,
            swapMode: 'ExactIn',
            maxAutoSlippageBps: 500 // 5%,
          });
        case 13:
          quote = _context2.sent;
          console.log('swap ', amount, 'sol => ', slug);
          console.log('quote', quote);
          _context2.next = 18;
          return jupiter_api_1["default"].swapPost({
            swapRequest: {
              quoteResponse: quote,
              userPublicKey: account,
              prioritizationFeeLamports: 'auto'
            }
          });
        case 18:
          swapResponse = _context2.sent;
          response = {
            transaction: swapResponse.swapTransaction
          };
          return _context2.abrupt("return", c.json(response, 200));
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](0);
          console.log('error', _context2.t0, 200);
          return _context2.abrupt("return", c.json({
            error: _context2.t0
          }));
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 23]]);
  }));
  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
app.openapi((0, zod_openapi_1.createRoute)({
  method: 'post',
  path: 'generate-og-image',
  tags: ['Og Image'],
  responses: openapi_1.actionsSpecOpenApiGetResponse
}), /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(c) {
    var _yield$c$req$json2, logoUrl, title, subtitle, price, change, volume, liquidity, marketCap, totalSupply, htmlContent, browser, page, screenshot;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return c.req.json();
        case 3:
          _yield$c$req$json2 = _context3.sent;
          logoUrl = _yield$c$req$json2.logoUrl;
          title = _yield$c$req$json2.title;
          subtitle = _yield$c$req$json2.subtitle;
          price = _yield$c$req$json2.price;
          change = _yield$c$req$json2.change;
          volume = _yield$c$req$json2.volume;
          liquidity = _yield$c$req$json2.liquidity;
          marketCap = _yield$c$req$json2.marketCap;
          totalSupply = _yield$c$req$json2.totalSupply;
          if (title) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", c.json({
            error: 'title is required'
          }, 400));
        case 15:
          htmlContent = "\n     <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Data Card</title>\n      <style>\n        body {\n          font-family: Arial, sans-serif;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: auto;\n          margin: 0;\n          background-color: #1a1a2e;\n        }\n        .card {\n          width: 800px;\n          border-radius: 16px;\n          background-color: #0f0f1a;\n          color: white;\n          padding: 20px;\n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n          box-sizing: border-box;\n        }\n        .card .header {\n          display: flex;\n          align-items: center;\n          margin-bottom: 20px;\n        }\n        .card .header img {\n          width: 80px;\n          height: 80px;\n          border-radius: 8px;\n        }\n        .card .header .info {\n          margin-left: 16px;\n        }\n        .card .header .info h1 {\n          font-size: 32px;\n          margin: 0;\n        }\n        .card .header .info p {\n          font-size: 24px;\n          margin: 0;\n        }\n        .card .content {\n          display: flex;\n          justify-content: space-between;\n        }\n        .card .content .item {\n          text-align: center;\n          flex: 1;\n        }\n        .card .content .item:not(:last-child) {\n          margin-right: 20px;\n        }\n        .card .content .item p {\n          margin: 4px 0;\n        }\n        .card .content .item .value {\n          font-size: 20px;\n          font-weight: bold;\n        }\n        .card .content .item .label {\n          font-size: 14px;\n          color: #999;\n        }\n      </style>\n    </head>\n    <body>\n      <div class=\"card\">\n        <div class=\"header\">\n          <img src=\"".concat(logoUrl, "\" alt=\"Logo\">\n          <div class=\"info\">\n            <h1>").concat(title, "</h1>\n            <p>").concat(subtitle, "</p>\n          </div>\n        </div>\n        <div class=\"content\">\n          <div class=\"item\">\n            <p class=\"value\">").concat(price, "</p>\n            <p class=\"label\">Price</p>\n          </div>\n          <div class=\"item\">\n            <p class=\"value\">").concat(change, "</p>\n            <p class=\"label\">24h Change</p>\n          </div>\n          <div class=\"item\">\n            <p class=\"value\">").concat(volume, "</p>\n            <p class=\"label\">24h Volume</p>\n          </div>\n          <div class=\"item\">\n            <p class=\"value\">").concat(liquidity, "</p>\n            <p class=\"label\">Liquidity</p>\n          </div>\n          <div class=\"item\">\n            <p class=\"value\">").concat(marketCap, "</p>\n            <p class=\"label\">Market Cap</p>\n          </div>\n          <div class=\"item\">\n            <p class=\"value\">").concat(totalSupply, "</p>\n            <p class=\"label\">Total Supply</p>\n          </div>\n        </div>\n      </div>\n    </body>\n    </html>\n    ");
          _context3.next = 18;
          return puppeteer_1["default"].launch();
        case 18:
          browser = _context3.sent;
          _context3.next = 21;
          return browser.newPage();
        case 21:
          page = _context3.sent;
          _context3.next = 24;
          return page.setContent(htmlContent);
        case 24:
          _context3.next = 26;
          return page.screenshot({
            type: 'jpeg'
          });
        case 26:
          screenshot = _context3.sent;
          _context3.next = 29;
          return browser.close();
        case 29:
          return _context3.abrupt("return", c.body(screenshot, 200, {
            'Content-Type': 'image/jpeg'
          }));
        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](0);
          console.log('error', _context3.t0, 200);
          return _context3.abrupt("return", c.json({
            error: _context3.t0
          }));
        case 36:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 32]]);
  }));
  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}());
exports["default"] = app;