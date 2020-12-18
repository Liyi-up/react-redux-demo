import {REDUCE,INCREASE} from "./action-types";

/*
  包含n个reduce函数的模块
 */
export function counter(state = 0, action) {
    console.log('counter', state, action);
    switch (action.type) {
        case INCREASE:
            return state + action.data;
        case REDUCE:
            return state - action.data;
        default:
            return state;

    }

}
