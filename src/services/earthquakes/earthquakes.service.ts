import { IEarthquake } from "../../entities/earthquake.entity";

class EarthquakeService {

  getEarthquakes = (filters?: IEarthquake) => {
    return [{
      id: 1, 
      place_id: 1, 
      magnitude: "'3.8 M(mb)",
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
      magnitude: "'3.8 M(mb)",
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
      id: 3, 
      place_id: 3, 
      magnitude: "'3.8 M(mb)",
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
      id: 4, 
      place_id: 4, 
      magnitude: "'3.8 M(mb)",
      latitude: '4343214231423142',
      longitude: '-4123412432',
      tsunami: true,
      unix_event_time: 142342314342,
      event_time: 'Sep 30 2022',
      created_at: 43214,
      updated_at: 4324231,
      deleted_at: 143214
    }]
  }

  getEarthquakeById = (id: string) => {
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
    }]
  }
}

export default EarthquakeService;