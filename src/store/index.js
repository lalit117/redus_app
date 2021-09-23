
import { createStore } from "redux"


const initalState = {counter:0, show:true}

const counterReucer = ( state, action ) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            show: state.show
        };
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            show: state.show
        };
    }

    if (action.type==="decrement") {
        return {
            counter: state.counter - 1,
            show: state.show
        }
    }

    if (action.type==="toggle") {
        return {
            show: !state.show,
            counter: state.counter
        }
    }

    return initalState
}

const store = createStore(counterReucer);

export default store;