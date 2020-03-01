import 'react-native'
import { WeatherData } from '../src/interfaces/WeatherData'
import NetworkService from '../src/services/NetworkingService'

describe('fetchWeatherData', () => {
  it('fetch data', async () => {
    const data: WeatherData[] = await NetworkService.fetchWeatherData()
    expect(data).not.toBeNull()
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).not.toBeNull()

    const weatherData: WeatherData = data[0]
    expect(weatherData.coord).not.toBeNull()
    expect(weatherData.weather).not.toBeNull()
    expect(weatherData.main).not.toBeNull()
    expect(weatherData.visibility).not.toBeNull()
    expect(weatherData.wind).not.toBeNull()
    expect(weatherData.clouds).not.toBeNull()
    expect(weatherData.dt).not.toBeNull()
    expect(weatherData.sys).not.toBeNull()
    expect(weatherData.timezone).not.toBeNull()
    expect(weatherData.id).not.toBeNull()
    expect(weatherData.name).not.toBeNull()
    expect(weatherData.cod).not.toBeNull()
    expect(weatherData.weather.length).toBeGreaterThan(0)
    expect(weatherData.weather[0]).not.toBeNull()
  })
})
