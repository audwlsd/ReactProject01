import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Button from '../button'

function fromatTime(time){
    let minutes = Math.floor(time/60)
    time -= minutes * 60
    let seconds = parseInt(time % 60 , 10)
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
class Timer extends Component {
    //라이프사이클은 랜더 전에 선언
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props
        if (!currentProps.isPlaying
            && nextProps.isPlaying === true) {
            //start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000)
            this.setState({
                timerInterval
            })
        } else if (currentProps.isPlaying === true &&
            nextProps.isPlaying === false) {
            // stop the interval
            clearInterval(this.state.timerInterval)
        }
    }

    render() {
        const {isPlaying, elapsedTime, timerDuration, startTimer, restartTimer} = this.props
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{fromatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying ? (
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