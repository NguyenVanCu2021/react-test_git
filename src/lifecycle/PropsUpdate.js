import React, { Component } from 'react';

class PropsUpdate extends Component {
    
    //componentWillReceiveProps
    componentWillReceiveProps(nextProps) { //cwr
        console.log('Prop: componentWillReceiveProps');
    }
    //shouldComponentUpdate --> để chạy tiếp hàm này cần return ra true/false
    shouldComponentUpdate(nextProps, nextState) { //scu
        console.log('Props: shouldComponentUpdate');
        return true;
    }
    //componentWillUpdate
    componentWillUpdate(nextProps, nextState) { //cwup
        console.log('Props: componentWillUpdate');
    }
    //componentDidUpdate
    componentDidUpdate(prevProps, prevState) { //cdup
        console.log('Props: componentDidUpdate');
    }
    
    render() {
        console.log('Prop:render');
        return (
            <div>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default PropsUpdate;