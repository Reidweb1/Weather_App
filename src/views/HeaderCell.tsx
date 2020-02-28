import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import { getTheme } from '../utilities/Theme'

export default class HeaderCell extends React.Component<any, any> {

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.locationText}>{'Seattle'}</Text>
        <Text style={styles.weatherText}>{'Sunshine'}</Text>
        <Text style={styles.degreeText}>{'58°'}</Text>
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
  }
})
