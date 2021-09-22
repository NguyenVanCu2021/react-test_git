import React from 'react';
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import NewDetailRealative from './NewDetailRealative';

////////////////////////////////////////////////////////////////
// kiểm tra slug vs id có đúng với mong muốn của mình chưa

// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

// function NewDetail() {
//     let { id } = useParams();
//     console.log(useParams());
//     return (
//      <div>
//       <h2>Now showing post {id}</h2>
//      </div>
//     );
//    }
/////////////////////////////////////////////////////////////////////

//class NewDetail extends Component { // ko dùng class vì nó ko có useParams()
function NewDetail() {
    //render() {    
        const numId = Number.parseInt(useParams().id); // đổi url:id sang number
        let i = 0; // phải định nghĩa ở đây vì trong return ko đc định nghĩa
        return (
            <div className="container">
                <div className="row">
                    {
                        data.map((value, key) => {
                            if (value.id === numId) {
                                return (key={key},
                                    <div className="card mb-3">
                                        <img src={value.image} className="card-img-top" alt="mainImg" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">
                                                {value.content}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }      
                </div>

                <h5>Tin liên quan</h5> 
                <div className="row">
                    {
                        data.map((value, key) => {
                            if (value.id !== numId) {
                                if(i<4) {
                                    ++i;
                                    return (
                                        <NewDetailRealative 
                                            key={key}
                                            nameId={value.id}
                                            image={value.image}
                                            title={value.title}
                                            description={value.description}
                                        />
                                    )
                                }       
                            }
                            return null;
                        })
                    }
                    
                </div>

            </div>
        );
    //}
}

export default NewDetail;