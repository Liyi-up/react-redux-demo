import {REDUCE, INCREASE} from "./action-types";
/*
 包含所有 action create
 */
// 增加
export const increase = (data) => ({type: INCREASE, data});
export const reduce = (data) => ({type: REDUCE, data});
