import Axios, { AxiosResponse } from 'axios'

const baseURL: string = ''

export default class NetworkService {

  /**
   * Fetch and return the weather data from the given endpoint.
   */
  public static fetchWeatherData = (): Promise<AxiosResponse> => {
    const url: string = `${baseURL}`
    return Axios.get(url)
  }

}