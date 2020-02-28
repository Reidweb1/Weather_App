import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { getTheme } from '../utilities/Theme'

export default class DayCell extends React.Component<any, any> {

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.spacer}/>
        <View style={styles.allLabelContainer}>
          {this.getDayLabels()}
        </View>
        <View style={styles.spacer}/>
      </View>
    )
  }

  private getDayLabels = () => {
    const labels = []
    for (let i = 0; i < 7; i++) {
      labels.push(this.getLabelView(i))
    }
    return labels
  }

  private getLabelView = (key: number) => {
    return (
      <View key={key} style={styles.labelContainer}>
        <Text style={styles.label}>{'Day'}</Text>
        <Text style={styles.label}>{'Weather'}</Text>
        <Text style={styles.label}>{'High'}</Text>
        <Text style={styles.label}>{'Low'}</Text>
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
    flex: 5,
    marginTop: getTheme().marginSixteen
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    textAlign: 'center'
  }
})
