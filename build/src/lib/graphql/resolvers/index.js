"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const earthquakes_resolver_1 = __importDefault(require("./earthquakes.resolver"));
const resolvers = {
    Query: Object.assign({}, earthquakes_resolver_1.default)
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map