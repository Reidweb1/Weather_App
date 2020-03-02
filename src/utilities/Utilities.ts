/**
 * A constant to store human readable days that can be used
 * in the `getDayOfTheWeek` function.
 */
const weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default class Utilities {

  /**
   * Converts a numerical representation of degrees in Kelvin and returns
   * a string of that value in Fahrenheit. The decimals param will round the
   * string to the desired decimal.
   */
  public static convertKelvinToFahrenheit = (kelvin: number, decimals: number): string => {
    const fahrenheit: number =  kelvin * (9/5) - 459.67
    return fahrenheit.toFixed(decimals)
  }

  /**
   * Take the Unix timestamp provided from the weather API and convert it
   * to a readable date.
   */
  public static formatTimeStamp = (timestamp: number): string => {
    const date: Date = new Date(timestamp * 1000)
    return ((date.getMonth()+1) + '/' + date.getDate() + `- ${weekdays[date.getDay()]}`)
  }

  /**
   * Take the Unix timestamp provided from the weather API and convert it
   * to a readable day of the week.
   */
  public static getDayOfTheWeek = (timestamp: number): string => {
    const date: Date = new Date(timestamp * 1000)
    return weekdays[date.getDay()]
  }

}
