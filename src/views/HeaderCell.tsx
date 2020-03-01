import React from 'react'
import { getTheme } from '../utilities/Theme'
import { WeatherData, Weather, Main } from '../interfaces/WeatherData'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import Utilities from '../utilities/Utilities'

interface HeaderCellProps {
  weatherData: WeatherData
}

export default class HeaderCell extends React.Component<HeaderCellProps, any> {

  public render() {
    const weatherObject: Weather = this.props.weatherData.weather[0]
    const tempObject: Main = this.props.weatherData.main
    const current: string = Utilities.convertKelvinToFahrenheit(tempObject.temp, 0)
    const high: string = Utilities.convertKelvinToFahrenheit(tempObject.temp_max, 0)
    const low: string = Utilities.convertKelvinToFahrenheit(tempObject.temp_min, 0)
    return (
      <View style={styles.container}>
        <Text style={styles.locationText}>{'Seattle'}</Text>
        <Text style={styles.weatherText}>{weatherObject.main}</Text>
        <Text style={styles.degreeText}>{`${current}°`}</Text>
        <View style={styles.dayContainer}>
          <View style={styles.spacer}/>
          <View style={styles.todayContainer}>
            <Text style={styles.todayText}>{'Friday - Today'}</Text>
          </View>
          <View style={styles.degreeContainer}>
            <Text style={styles.smallDegreeText}>{`High - ${high}°`}</Text>
            <Text style={styles.smallDegreeText}>{`Low - ${low}°`}</Text>
          </View>
          <View style={styles.spacer}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.15
  },
  locationText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: getTheme().fontSize36
  },
  weatherText: {
    flex: 1,
    textAlign: 'center',
    fontSize: getTheme().fontSize20
  },
  degreeText: {
    flex: 1,
    marginTop: getTheme().marginSixteen,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: getTheme().fontSize50
  },
  dayContainer: {
    flex: 1,
    marginTop: getTheme().marginSixteen,
    marginLeft: getTheme().marginThirtyTwo,
    marginRight: getTheme().marginThirtyTwo,
    flexDirection: 'row'
  },
  spacer: {
    flex: 1
  },
  todayContainer: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center'
  },
  todayText: {
    fontSize: getTheme().fontSize20,
    textAlign: 'left'
  },
  degreeContainer: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center'
  },
  smallDegreeText: {
    fontSize: getTheme().fontSize20,
    textAlign: 'center'
  }
})
