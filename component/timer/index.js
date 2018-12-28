import { connect } from 'react-redux'
import Timer from './presenter'

function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer)   // 이렇게 해주면, 컴포넌트는 props를 redux로 부터 얻는셈이 됨. return default state