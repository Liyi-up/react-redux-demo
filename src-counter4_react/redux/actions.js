import {REDUCE, INCREASE} from "./action-types";
/*
 包含所有 action create
 同步action 返回值为对象
 异步action 返回值为函数
 */
// 增加
export const increase = (data) => ({type: INCREASE, data});
export const reduce = (data) => ({type: REDUCE, data});
// 异步actions
export const incrementAsync = (data) => {
    return dispatch => {
        // 异步代码
        setTimeout(() => {
            // 一秒之后才去分发增加的action
            dispatch(increase(data));
        }, 1000)
    }
}
