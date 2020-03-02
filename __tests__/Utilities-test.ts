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

describe('formatTimeStamp', () => {
  it('Sample Date - 12/31/2019', () => {
    const timestamp: number = 1577837900
    const expected: string = '12/31/2019'

    const output: string = Utilities.formatTimeStamp(timestamp)
    expect(output).toEqual(expected)
  })

  it('Sample Date - 3/2/2020', () => {
    const timestamp: number = 1583176090
    const expected: string = '3/2/2020'

    const output: string = Utilities.formatTimeStamp(timestamp)
    expect(output).toEqual(expected)
  })

  it('Sample Date - 10/28/2000', () => {
    const timestamp: number = 972760090
    const expected: string = '10/28/2000'

    const output: string = Utilities.formatTimeStamp(timestamp)
    expect(output).toEqual(expected)
  })
})

describe('getDayOfTheWeek', () => {
  it('Day of the week - Tuesday', () => {
    const timestamp: number = 1577837900
    const expected: string = 'Tuesday'

    const output: string = Utilities.getDayOfTheWeek(timestamp)
    expect(output).toEqual(expected)
  })

  it('Day of the week - Monday', () => {
    const timestamp: number = 1583176090
    const expected: string = 'Monday'

    const output: string = Utilities.getDayOfTheWeek(timestamp)
    expect(output).toEqual(expected)
  })

  it('Day of the week - Saturday', () => {
    const timestamp: number = 972760090
    const expected: string = 'Saturday'

    const output: string = Utilities.getDayOfTheWeek(timestamp)
    expect(output).toEqual(expected)
  })
})
