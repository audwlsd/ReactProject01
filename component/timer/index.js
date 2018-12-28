import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as myeongJinActions } from '../../Redux/reducer'
import Timer from './presenter'

function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch){
    return {
        //왼쪽은 prop 이름, 오른쪽은 reducer의 이름
        startTimer: bindActionCreators(myeongJinActions.startTimer, dispatch),
        restartTimer: bindActionCreators(myeongJinActions.restartTimer, dispatch),
        addSecond: bindActionCreators(myeongJinActions.addSecond, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer)   // 이렇게 해주면, 컴포넌트는 props를 redux로 부터 얻는셈이 됨. return default state