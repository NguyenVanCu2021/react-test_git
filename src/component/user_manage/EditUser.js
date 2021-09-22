import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission,
        }

        this.displayEditForm = this.displayEditForm.bind(this);
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    //thằng này truyền lên cho 2 thằng cha. 1 thằng cần lấy info. 1 thằng thì ko cần chỉ lấy thuộc tính click
    btnSaveEditForm = () => {
        let info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.btnSaveEditForm(info) // thằng này là đại diện của thằng cha (lấy data ở đây gửi lên thằng cha)
        this.props.stateEditFormClick() // đại diện cho thằng cha lấy thuộc tính click gửi lên trên
    }

    displayEditForm() {
        //this.props.userEditObject --> dữ liệu của User. Thả nó vào các thẻ input
        if (this.props.displayEditFormControl === true) {
            return (
                // <div className="col-3">
                    <div className="card border-warning mb-3">
                        <div className="card-header text-center">Chỉnh sửa User</div>
                        <div className="card-body text-warning">
                            <div className="form-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Full name" 
                                    name="name"
                                    defaultValue={this.props.userEditObject.name}
                                    onChange={(e) => this.isChange(e)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone" 
                                    name="tel"
                                    defaultValue={this.props.userEditObject.tel}
                                    onChange={(e) => this.isChange(e)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <select  
                                    className="custom-select w-100 px-2 py-2"
                                    name="permission"
                                    defaultValue={this.props.userEditObject.permission}
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
                                    className="btn btn-outline-warning w-100" 
                                    onClick={() => this.btnSaveEditForm()}
                                >
                                    Lưu
                                </div>
                            </div>
                        </div>
                    </div>
                // </div>
            )
        }else return(<div></div>)
    }
    render() {
        return (this.displayEditForm());
    }
}

export default EditUser;