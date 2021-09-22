import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }
    
    controlAddUserBtn = () => { // mỗi lần nhấn và sẽ thay đổi trạng thái của state (đảo state)
        if (this.props.displayBtn === true) {
            return  <div 
                        className="btn btn-outline-success user-search-form-btn" 
                        onClick={() => this.props.getState()}
                    >
                        Close
                    </div>
        }else {
            return <div 
                        className="btn btn-outline-info user-search-form-btn"
                        onClick={() => this.props.getState()}
                    >
                        AddUser
                    </div>
        }
    }

    isChange = (event) => {
        this.setState(
            {tempValue: event.target.value},
            () =>{this.props.searchData(this.state.tempValue)});
    
    }

    render() {
        return (
            
                <div className="d-flex my-2">
                    <input
                        className="form-control user-search-form"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        placeholder="nhập tên cần tìm"
                        onChange={(e) => this.isChange(e)}
                    />
                    <div 
                        className="btn btn-outline-success user-search-form-btn"
                        onClick={() => this.props.searchData(this.state.tempValue)}
                    >
                        Search
                    </div>
                    {this.controlAddUserBtn()}                  
                </div>
        );
    }
}

export default Search;