import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { getTheme } from '../utilities/Theme'

export default class CurrentCell extends React.Component<any, any> {

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.spacer}/>
        <View style={styles.todayContainer}>
          <Text style={styles.todayText}>{'Friday - Today'}</Text>
        </View>
        <View style={styles.degreeContainer}>
          <Text style={styles.degreeText}>{'High 64'}</Text>
          <Text style={styles.degreeText}>{'Low 48'}</Text>
        </View>
        <View style={styles.spacer}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
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
  degreeText: {
    fontSize: getTheme().fontSize20,
    textAlign: 'center'
  }
})
