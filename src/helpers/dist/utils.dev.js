"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISCORD_AUTH_URL = exports.SERVER_BASE_URL = exports.DISCORD_API_BASE_URL = exports.CLIENT_SECRET = exports.CLIENT_ID = void 0;

var _api = require("discord/api");

var CLIENT_ID = '779335081386704907';
exports.CLIENT_ID = CLIENT_ID;
var CLIENT_SECRET = 'kgDO2x5GTWJrSSNF_alXQ4J4q2JEQQPH';
exports.CLIENT_SECRET = CLIENT_SECRET;
var DISCORD_API_BASE_URL = 'https://discord.com/api/';
exports.DISCORD_API_BASE_URL = DISCORD_API_BASE_URL;
var SERVER_BASE_URL = "".concat(_api.APP_BASE_URL, "v1/");
exports.SERVER_BASE_URL = SERVER_BASE_URL;
var DISCORD_AUTH_URL = _api.discord_auth_url;
exports.DISCORD_AUTH_URL = DISCORD_AUTH_URL;