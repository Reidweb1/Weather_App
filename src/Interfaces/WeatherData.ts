/**
 * These interfaces are meant to provide structure around the
 * response provided from the Weather API. More information can
 * be found here: https://openweathermap.org/api
 */

interface WeatherData {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

interface Coordinates {
  lon: number
  lat: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface Wind {
  speed: number
  deg: number
}

interface Clouds {
  all: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export {
  WeatherData,
  Coordinates,
  Weather,
  Main,
  Wind,
  Clouds,
  Sys
}
