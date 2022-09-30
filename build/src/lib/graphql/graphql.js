"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphqlServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./schema"));
const app = (0, express_1.default)();
const createGraphqlServer = (port) => __awaiter(void 0, void 0, void 0, function* () {
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: schema_1.default
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/api'
    });
    app.listen(port, () => {
        console.log("The server is running in " + port + " port");
        console.log(`http://localhost:${port}${apolloServer.graphqlPath}`);
    });
});
exports.createGraphqlServer = createGraphqlServer;
//# sourceMappingURL=graphql.js.map