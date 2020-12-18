/*
   包含n个reducer函数(根据旧的state以及action传递的新的state进行状态更新)
 */
import {combineReducers} from "redux";
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENT} from "./action-types";


 function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DEL_COMMENT:
            // 对原数组进行过滤返回除下标为action.data的所有项组成的一个新的数组
            return state.filter((item, index) => index !== action.data);
        case RECEIVE_COMMENT:
            // 接收异步请求到的数据
            return action.data;
        default:
            return state
    }
}
// 将所有reducer函数统一对外暴露
export default combineReducers({
    comments //指定reducer属性
})
// redux向外b暴露的是一个结构?
// {comments:[]}
