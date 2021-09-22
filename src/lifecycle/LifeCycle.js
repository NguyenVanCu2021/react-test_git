import React, { Component } from 'react'; // phím tắt: rcc
import PropsUpdate from './PropsUpdate';

class LifeCycle extends Component {
    //init (khởi tạo constructor, tạo props, states,...)
    constructor(props) { // phím tắt: con
        super(props);
        this.state = {
            status: 'khoi-tao-state',
            status2: 'khoi-tao-props'
        }
    }

    //mounting
    //trước hiện thi (componentWillMount)
    componentWillMount() { // phím tắt: cwm
        console.log('trước hiện thị');
    }
    //sau hiển thị
    componentDidMount() {
        console.log('sau hien thi');
    }
    
    //updating (state)
    //shouldComponentUpdate --> để chạy tiếp hàm này cần return ra true/false
    shouldComponentUpdate(nextProps, nextState) { //phím tắt: scu
        console.log('state: shouldComponentUpdate');
        return true;
    }
    //componentWillUpdate
    componentWillUpdate(nextProps, nextState) { //phím tắt: cwup
        console.log('state: componentWillUpdate');
    }
    //componentDidUpdate
    componentDidUpdate(prevProps, prevState) { //phím tắt: cdup
        console.log('state: componentDidUpdate');
    }
    
    updateClick() {
        this.setState({
            status: 'update',
            status2: 'props updating'
        });
    }

    render() {
        console.log('state: render');
        return (
            <div>
               <div className="btn btn-success" onClick={() => this.updateClick()}>Save</div>
               <PropsUpdate name={this.state.status2} />
            </div>
        );
    }
}

export default LifeCycle;