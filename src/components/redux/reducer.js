const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"


const initial={
    count:0
}


export function reducer(state=initial, action){

    switch(action.type){

        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count-1
            }
        default: return state
    }


}