export default (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.data]
        default:
            return state
    }
}