import 'react-native'
import Utilities from '../src/utilities/Utilities'


describe('convertKelvinToFahrenheit', () => {
  it('0 Kelvin', () => {
    const kelvin: number = 0
    const decimals: number = 0
    
    const output: string = Utilities.convertKelvinToFahrenheit(kelvin, decimals)
    const expected: string = '-460'
    expect(output).toEqual(expected)
  })
  
  it('50 Kelvin', () => {
    const kelvin: number = 50
    const decimals: number = 2
    
    const output: string = Utilities.convertKelvinToFahrenheit(kelvin, decimals)
    const expected: string = '-369.67'
    expect(output).toEqual(expected)
  })

  it('300 Kelvin', () => {
    const kelvin: number = 300
    const decimals: number = 1
    
    const output: string = Utilities.convertKelvinToFahrenheit(kelvin, decimals)
    const expected: string = '80.3'
    expect(output).toEqual(expected)
  })

  it('1500 Kelvin', () => {
    const kelvin: number = 1500
    const decimals: number = 4
    
    const output: string = Utilities.convertKelvinToFahrenheit(kelvin, decimals)
    const expected: string = '2240.3300'
    expect(output).toEqual(expected)
  })

})
