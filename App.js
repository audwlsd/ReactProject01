import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Timer from './component/timer'
import reducer from './Redux/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// 저장소 불러오기, provider 가 해줌. provider 가 store 를 하위 컴포넌트로 뿌려주는 역할을 함.
let store = createStore(reducer)


export default class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <Timer />
            </Provider>
        )
    }
}

