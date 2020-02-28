import React from 'react'
import NetworkingService from '../services/NetworkingService'
import {
  View,
  StyleSheet
} from 'react-native'

export default class WeatherView extends React.Component<any, any> {

  async componentDidMount() {
    NetworkingService.fetchWeatherData()
  }

  public render() {
    return <View style={styles.flatListContainer} />
  }

}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: '#81d1e6'
  }
})