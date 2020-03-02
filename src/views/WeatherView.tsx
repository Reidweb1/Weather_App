import React from 'react'
import DayCell from './DayCell'
import HeaderCell from './HeaderCell'
import { WeatherData } from '../interfaces/WeatherData'
import NetworkingService from '../services/NetworkingService'
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native'

interface WeatherViewState {
  weatherData: WeatherData[]
}

export default class WeatherView extends React.Component<any, WeatherViewState> {

  /**
   * Set the default state for the component.
   */
  constructor(props: any) {
    super(props)
    this.state = {
      weatherData: []
    }
  }

  /**
   * Fetch the Weather Data and refresh the component's state.
   */
  async componentDidMount() {
    await this.fetchData()
  }

  public render() {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={this.state.weatherData}
          renderItem={this.cellForItem}
          keyExtractor={(item: any) => { return JSON.stringify(item)}} />
      </View>
    )
  }

  /**
   * Return the correct FlatList cell based on the item's index.
   */
  private cellForItem = (item: { item: WeatherData, index: number }) => {
    if (item.index === 0) {
      return (
        <HeaderCell weatherData={item.item} />
      )  
    }

    const isBottomCell: boolean = (item.index === this.state.weatherData.length -1) ? true : false
    return (
      <DayCell weatherData={item.item} isBottomCell={isBottomCell} />
    )
  }

  /**
   * Fetch the weather data and refresh the component's state.
   */
  private fetchData = async () => {
    const data: WeatherData[] = await NetworkingService.fetchWeatherData()
    return this.setState({ weatherData: data })
  }

}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: '#81d1e6'
  },
  flatList: {
    flex: 1,
    width: Dimensions.get('window').width,
		paddingTop: 8
  }
})
