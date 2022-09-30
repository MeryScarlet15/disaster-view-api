"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EarthquakeService {
    constructor() {
        this.getEarthquakes = (filters) => {
            return [{
                    id: 1,
                    place_id: 1,
                    magnitude: "3.8mg",
                    latitude: '4343214231423142',
                    longitude: '-4123412432',
                    tsunami: true,
                    unix_event_time: 142342314342,
                    event_time: 'Sep 30 2022',
                    created_at: 43214,
                    updated_at: 4324231,
                    deleted_at: 143214
                },
                {
                    id: 2,
                    place_id: 3,
                    magnitude: "3.8mg",
                    latitude: '4343214231423142',
                    longitude: '-4123412432',
                    tsunami: true,
                    unix_event_time: 142342314342,
                    event_time: 'Sep 30 2022',
                    created_at: 43214,
                    updated_at: 4324231,
                    deleted_at: 143214
                }];
        };
        this.getEarthquakeById = (id) => {
            return [{
                    id: 1,
                    place_id: 1,
                    magnitude: "3.8mg",
                    latitude: '4343214231423142',
                    longitude: '-4123412432',
                    tsunami: true,
                    unix_event_time: 142342314342,
                    event_time: 'Sep 30 2022',
                    created_at: 43214,
                    updated_at: 4324231,
                    deleted_at: 143214
                },
                {
                    id: 2,
                    place_id: 3,
                    magnitude: "3.8mg",
                    latitude: '4343214231423142',
                    longitude: '-4123412432',
                    tsunami: true,
                    unix_event_time: 142342314342,
                    event_time: 'Sep 30 2022',
                    created_at: 43214,
                    updated_at: 4324231,
                    deleted_at: 143214
                }];
        };
    }
}
exports.default = EarthquakeService;
//# sourceMappingURL=earthquakes.service.js.map