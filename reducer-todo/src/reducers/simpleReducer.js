export const initialState = {
    item: [{
        item: "",
        completed: false,
        id: Date.now()
    }],
}

export const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
            case "ADD_TODO":
                return {...state, item:[...state.item, action.payload]}
            case "COMPLETED":
            
                const newState = state.item.map(cv => {
                    if (cv.id === action.payload){
                        return {
                            ...cv,
                            completed: !cv.completed
                        }
                    } else {
                        return cv
                    }
                })    
                return {...state, item: newState}
            case "REMOVE":
                // const filtered = state.item.filter(cv => {
                //     if (cv.completed === false){
                //         return cv
                //     }
                // })
                const filter = state.item.filter(cv => cv.completed === false)
                return {...state, item: filter}
            default:
                return state;
    }
}