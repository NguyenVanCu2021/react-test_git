import React, { Component } from 'react';
import NewsControl from './NewsControl';
import data from '../../data/data.json'

class News extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    { // đặt dấu ngoặc này vì nó đc viết trong return(). 1 hàm chỉ có 1 return()
                        data.map((value, key) => (
                            <NewsControl 
                                key={key}
                                nameId={value.id}
                                title={value.title}
                                description={value.description}
                                content={value.content}
                                image={value.image}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default News;