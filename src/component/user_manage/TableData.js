import React, { Component } from 'react';
import ControlTableData from './ControlTableData';

class TableData extends Component {

    mappingDataUser = () => this.props.dataUser.map((value, key) => ( // => () tuong duong => { return () }
        <ControlTableData
            key={key}
            stt={key+1}
            name={value.name}
            phone={value.tel}
            permission={value.permission}
            // id={value.id}
            editFunClick={() => this.props.editFun(value)} // cháu gọi cha qua props editFun (lấy giá trị)
            stateEditFormClick={() => this.props.stateEditForm()} // mở form edit lên
            btnDelete={() => this.props.btnDelete(value.id)} // xóa dữ liệu chỉ cần lấy id thôi
        />
    ))

    render() {
        return (
           
            <div className="col">
                <table className="table table-hover blue-color">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Điện Thoại</th>
                            <th scope="col">Quyền</th>
                            <th scope="col">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
           
        );
    }
}

export default TableData;