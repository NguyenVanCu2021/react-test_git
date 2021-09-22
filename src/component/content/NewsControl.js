import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NewsControl extends Component {
    
    // https://freetuts.net/tao-slug-tu-dong-bang-javascript-va-php-199.html để xem một số cách tạo url thân thiện
    slugUrl = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
     
        // return
        return str;
    }
    
    render() {
        return (
            <div className="col-sm-6 col-lg-4 my-2">
                <div className="card h-100" style={{ width: "20rem" }}>
                {/* giả sử muốn tạo đường dẫn giống như vậy */}
                {/* https://vnexpress.net/guardiola-toi-chang-viec-gi-phai-xin-loi-cdv-man-city-4358316.html */}
                    <Link to={"/tin-tuc/" + this.slugUrl(this.props.title) + "." + this.props.nameId + ".html"}>
                        <img src={this.props.image} className="card-img-top" alt="mainImg " />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.description}
                        </p>
                        <Link to={"/tin-tuc/" + this.slugUrl(this.props.title) + "." + this.props.nameId + ".html"} className="btn btn-primary">
                            Chi tiết
                        </Link>
                    </div>
                </div>                           
            </div>
        );
    }
}

export default NewsControl;