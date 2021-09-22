import React, { Component } from 'react';
import { Redirect } from 'react-router'; //import Redirect

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            fDate: 'thu5'
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]: value //Handling Multiple Inputs. https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
                          //Sử dụng thằng này để lấy một loạt giá trị trong forms
                          //tiếng việt: https://viblo.asia/p/su-dung-form-trong-react-63vKjVW6K2R
                          // cứ đúng cấu trúc []: giá trị là được ko cần gom chung một chỗ
        });
    }

    chooseFile = (event) => {
        const file = event.target.files
        const nameFile = event.target.files[0].name; //consolog ra để xem name nằm ở vị trí nào
        
        this.setState({
            [nameFile]: file //đây cũng có []: giá trị nó tự gom lại thành 1 object
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            console.log(this.state);
            return <Redirect to="/tin-tuc" />;
        }
        return (
            <div className="container px-5 my-4">
                <form className="px-5 user-form">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Name
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Full name" 
                            name="fName"
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="fEmail"
                            onChange={(e) => this.isChange(e)}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="fPassword"
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAddress">
                            Address
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Your address"
                        name="fAddress"
                        onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="my-select" className="d-flex">Select</label>
                        <select value={this.state.fDate} className="custom-select w-100 px-2 py-2" name="fDate" onChange={(e) => this.isChange(e)}>
                            <option value='thu3'>Thứ 3</option>
                            <option value='thu5'>Thứ 5</option>
                            <option value='thu7'>Thứ 7</option>
                            <option value='thu2'>Thứ 2</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={"Message"}
                            name="fMessage"
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="my-input" className="p-2">Chọn file</label>
                        <input className="form-control-file" type="file" name="fFile" onChange={(e) => this.chooseFile(e)}/>
                    </div>
                    <button type="submit" onClick={(e) => {this.submitForm(e)}} className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Contact;