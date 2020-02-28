import Axios, { AxiosResponse } from 'axios'
import AppId from '../appId/AppId'

import {
  WeatherData
} from '../Interfaces/WeatherData'

const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather'

interface WeatherParams {
  appid: string
  q: string
}

export default class NetworkService {

  /**
   * Fetch and return the weather data from the given endpoint.
   */
  public static fetchWeatherData = (): Promise<WeatherData> => {
    const url: string = `${baseURL}`
    const params: WeatherParams = {
      appid: AppId,
      q: 'London,uk'
    }
    return Axios.get(url, { params: params }).then((response: AxiosResponse) => {
      return response.data
    })
  }

}
