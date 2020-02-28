import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default class WeatherView extends React.Component<any, any> {

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