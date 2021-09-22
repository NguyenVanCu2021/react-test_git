import React, { Component } from 'react';

class Content extends Component {
    constructor(props) { // nhấn "con" xong tab để khởi tạo hàm contructor 
        super(props);
        //this.tempSave = React.createRef();
        this.state = {
            status: 0
        }
    }
    thongbao = () => { alert("nhan vao hien len") }
    thongbao1 = (x) => { alert(x) }
    
    renderBtn = () => ( // để ngoặc nhọn để tự return
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                <div className="btn btn-warning" onClick={this.thongbao1.bind(this, "a hi hi")}>Remove</div>
                {/* <div className="btn btn-primary" onClick={() => this.thongbao1("ha ha")}>Alert</div> */}
            </div>
        </div>
    )
    renderForm = function() { 
        return (
        <div className="row">
            <input name="my-input" className="form-control" type="text" defaultValue={this.props.title} ref={(data) => { this.tempSave=data }}/>
            <div className="btn btn-success mt-1" onClick={() => this.saveClick()}>Save</div>
        </div>
        )}
    renderCheck = function() {
        if (this.state.status === 0) {
            return this.renderBtn();
        }else {
            return this.renderForm();
        }
    }
    editClick = function() { // dù dùng funct hay arrow cũng đều đc. this cũng ko bị ảnh hưởng? hay thật
        this.setState({status: 1}); // gõ phím tắt sst
    }
    saveClick = () => {
        this.setState({status: 0});
        console.log(this.tempSave.value);
    }

    render() {
        return (
            <div className="container">
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className={"col-lg-6 " + this.props.order2}>
                                <div className="p-5">
                                    <img
                                        className="img-fluid rounded-circle"
                                        src={this.props.image}
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className={"col-lg-6 " + this.props.order1}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.title}</h2>
                                    <p>
                                        {this.props.description}
                                    </p>
                                    {this.renderCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;