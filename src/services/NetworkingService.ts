import Axios, { AxiosResponse } from 'axios'
import AppId from '../appId/AppId'

const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather'

interface WeatherParams {
  appid: String
  q: String
}

export default class NetworkService {

  /**
   * Fetch and return the weather data from the given endpoint.
   */
  public static fetchWeatherData = (): Promise<any> => {
    const url: string = `${baseURL}`
    const params: WeatherParams = {
      appid: AppId,
      q: 'London,uk'
    }
    return Axios.get(url, { params: params }).then((response: AxiosResponse) => {
      return response
    }).catch((error: Error) => {
      return
    })
  }

}
