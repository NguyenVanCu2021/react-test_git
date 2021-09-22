import React, { Component } from 'react';
import EditUser from './EditUser';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: '',
        }

        this.disAddUserBtn = this.disAddUserBtn.bind(this);
        this.displayAddForm = this.displayAddForm.bind(this);
    }
    
    disAddUserBtn() { // mỗi lần nhấn và sẽ thay đổi trạng thái của state (đảo state)
        if (this.props.getDisplayAddForm === true) {
            return  <div 
                        className="btn btn-outline-success mb-2 w-100"
                        onClick={() => 
                            // this.changeStateUserBtn(),
                            this.props.changeStateUser()
                        }
                    >
                        Close
                    </div>
        }else {
            return <div 
                        className="btn btn-outline-info mb-2 w-100"
                        onClick={() => 
                            // this.changeStateUserBtn(),
                            this.props.changeStateUser()
                        }
                        >
                            AddUser
                    </div>
        }
    }

    // chỗ này ko thay đổi gì chỉ làm đường cho đi xuyên qua để đi đến EditUser
    btnSaveEditForm = (info) => { 
        this.props.btnSaveEditForm(info)
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // let item = {}; 

        this.setState(
            //nhận một lúc nhiều input
            { 
                [name]: value
            },
            // đóng gói nó vào 1 mảng
            // () => {
            //     item.id = this.state.id;
            //     item.name = this.state.name;
            //     item.tel = this.state.tel;
            //     item.permission = this.state.permission
            // }
        );
        //console.log(item);
    }


    displayAddForm() {   

        return(
            <div className="card border-info mb-3">
                <div className="card-header text-center">Thêm mới User</div>
                <div className="card-body text-info">
                    <div className="form-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Full name" 
                            name="name"
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone" 
                            name="tel"
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <select  
                            className="custom-select w-100 px-2 py-2"
                            name="permission"
                            onChange={(e) => this.isChange(e)}
                        >
                                <option value=''>Chọn quyền truy cập</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>User</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <div 
                            className="btn btn-outline-info w-100" 
                            onClick={() => this.props.newUser(this.state.name,this.state.tel,this.state.permission)}
                        >
                            Thêm mới
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        {/* {this.disAddUserBtn()} */}

        if ((this.props.getDisplayAddForm && this.props.controlGetDisplayEditForm) === true) {
            return (
                <div className="col-3">
                    <div>
                        <EditUser 
                            displayEditFormControl = {this.props.controlGetDisplayEditForm}
                            stateEditFormClick={() => this.props.stateEditForm()}
                            userEditObject={this.props.userEditObject}
                            btnSaveEditForm={(info) => this.btnSaveEditForm(info)}
                        />
                    </div>
                    <div>
                        {this.displayAddForm()}
                    </div>
                </div>
            )
        }else if (this.props.getDisplayAddForm === true && this.props.controlGetDisplayEditForm === false) {
            return (
                <div className="col-3">
                        {this.displayAddForm()}
                </div>
            )
        }else if (this.props.getDisplayAddForm === false && this.props.controlGetDisplayEditForm === true) {
            return (
                <div className="col-3">
                        <EditUser 
                            displayEditFormControl = {this.props.controlGetDisplayEditForm}
                            stateEditFormClick={() => this.props.stateEditForm()}
                            userEditObject={this.props.userEditObject}
                            btnSaveEditForm={(info) => this.btnSaveEditForm(info)}
                        />
                </div>
            )
        }else return null;
        
    }
}

export default AddUser;





// import React, { Component } from "react";

// class AddUser extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       city: ""
//     };

//     this.onHandleChange = this.onHandleChange.bind(this);
//     this.onHandleSubmit = this.onHandleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           id="mainInput"
//           onChange={this.onHandleChange}
//           placeholder="Get current weather..."
//           value={this.state.city}
//           type="text"
//         />
//         <button onClick={this.onHandleSubmit} type="submit">
//           Search!
//         </button>
//       </form>
//     );
//   }

//   onHandleChange(e) {
//     this.setState({
//       city: e.target.value
//     });
//   }

//   onHandleSubmit(e) {
//     e.preventDefault();
//     const city = this.state.city;
//     this.props.onSearchTermChange.bind(city);
//     this.setState({
//       city: ''
//     });
// }
// }

// export default AddUser;