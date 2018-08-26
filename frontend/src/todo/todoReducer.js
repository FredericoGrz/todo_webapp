const INITIAL_STATE = {
    description: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_DONE':
            return { ...state }
        case 'TODO_PENDING':
            return { ...state }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}