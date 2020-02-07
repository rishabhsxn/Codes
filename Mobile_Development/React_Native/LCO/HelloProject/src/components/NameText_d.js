// this is a dumb component

import React, { Component } from 'react'
import {Text, StyleSheet } from 'react-native'

export default class NameText_d extends Component
{
  render()
  {
    return (        // it can only return one Tag (which can contain more inside)
         <Text style={styles.textStyle}>Rishabh Saxena</Text>
    )
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 22,
    color: '#FFFFFF',
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5
  }
})