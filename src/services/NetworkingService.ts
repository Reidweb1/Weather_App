import Axios, { AxiosResponse } from 'axios'
import AppId from '../appId/AppId'
import { WeatherData } from '../interfaces/WeatherData'

const baseURL: string = 'http://api.openweathermap.org/data/2.5/forecast'

interface WeatherParams {
  appid: string
  id: number
}

/**
 * This is the Seattle City object from openweathermap.org
 {
    "id": 5809844,
    "name": "Seattle",
    "country": "US",
    "coord": {
      "lon": -122.332069,
      "lat": 47.606209
    }
  }
 */

export default class NetworkService {

  /**
   * Fetch and return the weather data from the given endpoint.
   */
  public static fetchWeatherData = (): Promise<WeatherData[]> => {
    const url: string = `${baseURL}`

    // Param is currently hard-coded to find weather for Seattle.
    const params: WeatherParams = {
      appid: AppId,
      id: 5809844
    }
    return Axios.get(url, { params: params }).then((response: AxiosResponse) => {
      return response.data.list
    }).catch((error: Error) => {
      console.log('Error on `fetchWeatherData`: ', error)
    })
  }

}
