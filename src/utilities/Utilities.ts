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

}
