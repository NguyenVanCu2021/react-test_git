import React, { Component } from 'react';

class ControlTableData extends Component {
    permissionShow = () => {
        if(this.props.permission === 1) return 'Admin'
        else if (this.props.permission === 2) return 'Moderator'
        else return 'User'
    }

    controlEditFun = () => { // thằng con
        this.props.editFunClick(); 
        this.props.stateEditFormClick();
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    
                        <div 
                            className="btn btn-outline-info user-mr-16"
                            onClick={() => this.controlEditFun()}
                        >
                            <i className="ti-slice user-mr-8"></i>
                            Sửa
                        </div>
                        <div 
                            className="btn btn-outline-warning"
                            onClick={() => this.props.btnDelete()}
                        >
                            <i className="ti-cut user-mr-8"></i>
                            Xóa
                        </div>
                    
                </td>
            </tr>
        );
    }
}

export default ControlTableData;