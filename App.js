import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Timer from './component/timer'
import reducer from './Redux/reducer'
import { createStore } from 'redux'
import { provide } from 'react-redux'

export default class App extends React.Component {
    render() {
        return <Timer />
    }
}

