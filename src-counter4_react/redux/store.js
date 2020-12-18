import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// 引入异步中间件
import thunk from "redux-thunk";
import {counter} from "./reducers";
// 创建一个store对象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))// 应用异步中间件
); //内部会第一次调用reducer函数得到初始state\
export default store;
