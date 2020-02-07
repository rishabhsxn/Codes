// this is a smart component

import React, { Component } from 'react'
import {Text, StyleSheet } from 'react-native'

export default class NameText_s extends Component
{
    render()
    {
        return (
            <Text style={ styles.textStyle}>{this.props.name}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        color: '#FFFFFF',
        backgroundColor: 'orange',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5
    }
})
