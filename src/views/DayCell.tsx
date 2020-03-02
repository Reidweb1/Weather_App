import React from 'react'
import Utilities from '../utilities/Utilities'
import { getTheme } from '../utilities/Theme'
import { WeatherData, Weather, Main } from '../interfaces/WeatherData'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

interface DayCellProps {
  weatherData: WeatherData
}

export default class DayCell extends React.Component<DayCellProps, any> {

  public render() {
    const weatherObject: Weather = this.props.weatherData.weather[0]
    const tempObject: Main = this.props.weatherData.main
    const high: string = Utilities.convertKelvinToFahrenheit(tempObject.temp_max, 0)
    const low: string = Utilities.convertKelvinToFahrenheit(tempObject.temp_min, 0)
    const dateString: string = Utilities.formatTimeStamp(this.props.weatherData.dt)
    return (
      <View style={styles.container}>
        <View style={styles.spacer}/>
        <View style={styles.allLabelContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.dayLabel}>{dateString}</Text>
          <Text style={styles.label}>{weatherObject.main}</Text>
          <Text style={styles.label}>{`High - ${high}°`}</Text>
          <Text style={styles.label}>{`Low - ${low}°`}</Text>
        </View>
        </View>
        <View style={styles.spacer}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  spacer: {
    flex: 1
  },
  allLabelContainer: {
    flex: 6,
    marginTop: getTheme().marginSixteen
  },
  labelContainer: {
    flex: 1,
    marginTop: getTheme().marginEight,
    marginBottom: getTheme().marginEight,
    flexDirection: 'row'
  },
  dayLabel: {
    flex: 1,
    textAlign: 'left'
  },
  label: {
    flex: 1,
    textAlign: 'center'
  }
})
