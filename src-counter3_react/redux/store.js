import {createStore} from "redux";
import {counter} from "./reducers";
// 创建一个store对象
const store = createStore(counter); //内部会第一次调用reducer函数得到初始state\
export default store;
