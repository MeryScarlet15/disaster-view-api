import EarthquakeService from "../../../services/earthquakes/earthquakes.service"

const earthquakeServices = new EarthquakeService()

const earthquakeQueries = {
  earthquakes: (_: any, args: any) => {
   return  earthquakeServices.getEarthquakes()
  }
}

export default earthquakeQueries