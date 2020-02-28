import React from 'react'
import DayCell from './DayCell'
import HeaderCell from './HeaderCell'
import CurrentCell from './CurrentCell'
import NetworkingService from '../services/NetworkingService'
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native'

export default class WeatherView extends React.Component<any, any> {

  async componentDidMount() {
    // NetworkingService.fetchWeatherData()
  }

  public render() {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={[1, 2, 3]}
          renderItem={this.cellForItem}
          // Find different UUID
          keyExtractor={(item: any) => { return JSON.stringify(item)}} />
      </View>
    )
  }

  private cellForItem = (item: { item: any, index: number }) => {
    if (item.item === 1) {
      return (
        <HeaderCell />
      )  
    }

    if (item.item === 2) {
      return (
        <CurrentCell />
      )
    }

    return (
      <DayCell />
    )
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
