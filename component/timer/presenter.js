import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Button from '../button'

class Timer extends Component {
    //라이프사이클은 랜더 전에 선언
    componentWillReceiveProps(nextProps){
        const currentProps = this.props
        if(currentProps.isPlaying===false && nextProps.isPlaying===true){
            //start the interval
        }else if(currentProps.isPlaying===true && nextProps.isPlaying===false){
            // stop the interval
        }
    }

    render() {
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer } = this.props
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {! isPlaying ? (
                        <Button iconName="play-circle" onPress={startTimer}/>
                    ) : null}
                    {isPlaying && (
                        <Button iconName="stop-circle" onPress={restartTimer}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
})


export default Timer