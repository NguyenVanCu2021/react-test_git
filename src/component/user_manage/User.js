import React, { Component } from 'react';
import AddUser from './AddUser';
import Search from './Search';
import TableData from './TableData';

import DataUser from './data/Data.json'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFormState: false,
            editFormState: false,
            //data: DataUser, // học react bình thường(giả sử có BE qua file data.json)
            data: [], //học localStorage
            searchKey: '', //nhưng vẫn phải đặt vào để nó lấy giá trị ban đầu là tất cả
            userEditObject: {}
        }
    }

    // thay tạm cho componentWillMount
    componentDidMount() {
        if (localStorage.getItem('userData') === null) {
            localStorage.setItem('userData', JSON.stringify(DataUser));
        }
        else {
            let temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data: temp
            });
        }
    }
    

    searchData = (data) => {
        this.setState({
            searchKey: data // ko cần thiết phải khai báo giá trị ban đầu ở this.state = {}
        });
    }

    controlAddFormUser= () => {
        this.setState({
            addFormState: !this.state.addFormState
        });
    }
    
    addUser = (name, tel, permission) => {
        let item = {};
        item.id = '';
        item.name = name;
        item.tel = tel;
        item.permission = Number.parseInt(permission);

        let items = this.state.data; //lấy hết data
        items.push(item);            // thêm 1 thằng item vào nữa

        this.setState({
            data: items // cập nhật lại
        });

        // cập nhật lại dữ liệu trong localStorage
        localStorage.setItem('userData', JSON.stringify(items));
    }

    changeStateEditForm= () => {
        this.setState({
            editFormState: !this.state.editFormState
        });
    }

    // thằng này đi xuống 2 cấp User -> TableData -> ControlTableData
    // Lấy dữ liệu ban đầu cho edit form
    getUserToEditForm = (user) => { // thằng này cần lấy dữ liệu của thằng con nên gọi tham số
        this.setState({
            userEditObject: user
        });
    }

    //lấy dữ liệu sau chỉnh sửa khi nhấn nút Lưu
    btnSaveEditForm = (info) => {
        this.state.data.forEach( (value, key) => {
            if (value.id === info.id) {
                value.name = info.name;
                value.tel = info.tel;
                value.permission = Number.parseInt(info.permission);
            }
        });
        
        // cập nhật lại localStorage
        localStorage.setItem('userData', JSON.stringify(this.state.data))
    }

    // xóa dữ liệu
    // ý tưởng này là lọc ra các phần tử có id !=== idUser. do hàm filter trả về mảng mới nên đặt ra
    // 1 biến sau đó cập nhật lại nó vào data. (cái này chỉ dùng để mô phỏng)
    // Cách đúng nên là trong data nên có thêm 1 trường gọi là Visible để lưu trạng thái khi delete thì
    // đổi trạng thái của biến này
    btnDelete = (idUser) => {
        let deleteUser = this.state.data.filter(value => value.id !== idUser);

        this.setState({
            data: deleteUser //cập nhật lại dữ liệu
        });

        //cập nhật lại localStorage
        localStorage.setItem('userData', JSON.stringify(deleteUser))
    }

    render() {

        let searchResults =[];
        this.state.data.forEach(item => {
            //indexOf trả về vị trí phần tử trong mảng nếu ko có trả về -1. Xem thêm về Find index
            if (item.name.indexOf(this.state.searchKey) !== -1) {  
                searchResults.push(item);
            }
        })
        //console.log(searchResults);
        return (
            <div className="container">
                <Search 
                    getState={() => this.controlAddFormUser()} 
                    displayBtn={this.state.addFormState} 
                    searchData = {(data) => this.searchData(data)}
                />
                <hr />
                <div className="row">
                        <TableData 
                            dataUser={searchResults}
                            editFun={(user) => this.getUserToEditForm(user)} // bố kêu ông bằng function getUserToEditForm
                            stateEditForm={() => this.changeStateEditForm()} // state hiển thị form (ko dùng)
                            btnDelete={(idUser) => this.btnDelete(idUser)} // button Delete
                        />
                       
                        <AddUser 
                            // Add User
                            changeStateUser={() => this.controlAddFormUser()} // Nút nhấn AddUser/Close
                            getDisplayAddForm={this.state.addFormState} // state hiển thị form
                            newUser={(name,tel,permission) => this.addUser(name,tel,permission)} // Nút "thêm mới"
                            //Edit User
                            controlGetDisplayEditForm={this.state.editFormState} // state hiển thị Form
                            stateEditForm={() => this.changeStateEditForm()} // nút lưu
                            userEditObject={this.state.userEditObject}// lấy data đầu vào cho form edit
                            btnSaveEditForm={(info) => this.btnSaveEditForm(info)} // lấy dữ liệu sau chỉnh sửa
                        />
                        
                           
                        
                </div>
            </div>
        );
    }
}

export default User;