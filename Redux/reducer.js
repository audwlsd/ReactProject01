// import

// actions (create 변수 - 스위치 구문에서 사용할 변수들)
const START_TIMER = 'START_TIMER'
const RESTART_TIMER = 'RESTART_TIMER'
const ADD_SECOND = 'ADD_SECOND'

// action creators
function startTimer() {
    return {
        type: START_TIMER
    }

}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

// reducer  (초기 상태 설정)
const TIMER_DURATION = 1500

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state)
        case RESTART_TIMER:
            return applyRestartTimer(state)
        case ADD_SECOND:
            return applyAddSecond(state)
        default:
            return state
    }
}

// reducer funcions
function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    }
}

function applyRetartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    if (state.elapsedTime < TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}

// export action creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}
//export reducer
export default reducer