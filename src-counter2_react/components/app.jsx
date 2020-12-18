import React, {Component} from "react";

class App extends Component {
    state = {
        count: 0,
        increment: 1
    };
    static propTypes = {};
    increase = () => {
        // 1.得到选择的增量值
        const increment= this.state.increment * 1;
        // 2. 得到原本的值
        const initial = this.state.count ;
        // 3. 更新状态
        const count = initial + increment;
        this.setState({
            count
        })
    };
    change = (event) => {
        const increment = event.target.value;
        console.log(increment);
        this.setState({
            increment
        })
    };
    reduce = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2. 得到原本的值
        const initial = this.state.count;
        // 3. 更新状态
        const count = initial - increment;
        this.setState({
            count
        })
    };
    incrementIfOdd = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2. 得到原本的值
        const initial = this.state.count;
        // 判断是否满足条件
        if (initial % 2 === 1) {
            // 3. 更新状态
            const count = initial + increment;
            this.setState({
                count
            });
        }
    };
    incrementIfAsync = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2. 得到原本的值
        const initial = this.state.count;
        // 3. 使用延迟定时器模拟异步更新
        setTimeout(() => {
            const count = initial + increment;
            this.setState({
                count
            });
        }, 1000);


    };

    render() {
        const {count} = this.state;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <button onClick={this.increase}>+</button>
                    <select onChange={this.change} value={this.state.increment}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.reduce}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if add</button>
                    <button onClick={this.incrementIfAsync}>increment async</button>
                </div>
            </div>
        );
    }
}

export default App;
