const defaultState = {
    count: 0,
    books: []
}


export default function rootReducer(state= defaultState, action ){

    console.log("current state:", state)
    console.log("action:", action)
    console.log('--------------')


    switch(action.type){
        case "INCREMENT":
            return{
                count: state.count + action.amount,
                books: state.books
            }
        case "DECREMENT":
            return{
                count: state.count - action.amount,
                books: state.books
            }
        case "FETCHBOOKS":
            return{
                books: action.books,
                count: state.count
            }
        default: 
        return{
                count: state.count,
                books: state.books
            }
        
    }

}

