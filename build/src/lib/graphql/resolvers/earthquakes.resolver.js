"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const earthquakes_service_1 = __importDefault(require("../../../services/earthquakes/earthquakes.service"));
const earthquakeServices = new earthquakes_service_1.default();
const earthquakeQueries = {
    earthquakes: (_, args) => {
        return earthquakeServices.getEarthquakes();
    }
};
exports.default = earthquakeQueries;
//# sourceMappingURL=earthquakes.resolver.js.map