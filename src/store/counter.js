
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";


// const initalState = {counter:0, show:true}
const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter:0, show:true},
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter+action.payload
        },
        toggle(state) {
            state.show =!state.show;
        }
    }
});

// const counterReucer = ( state, action ) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             show: state.show
//         };
//     }
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             show: state.show
//         };
//     }
//     if (action.type==="decrement") {
//         return {
//             counter: state.counter - 1,
//             show: state.show
//         }
//     }
//     if (action.type==="toggle") {
//         return {
//             show: !state.show,
//             counter: state.counter
//         }
//     }
//     return initalState
// }
// const store = createStore(counterReucer);

// const store = createStore(counterSlice.reducer);
// const store = configureStore({ 
//     reducer: {
//         counter: counterSlice.reducer,  // or reducer: { counter: counterSlice.reducer }
//     }
// });

export const counterActions = counterSlice.actions;


export default counterSlice.reducer;