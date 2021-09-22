import Content from "./Content";
import React, { Component } from 'react';

class ControlContent extends Component {
    render() {
        return (
            <div>
                <Content
                    title="For those about to rock..."
                    image="assets/img/01.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    order1="order-lg-1"
                    order2="order-lg-2"
                />
                <Content
                    title="We salute you!"
                    image="assets/img/02.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    order1="order-lg-2"
                    order2="order-lg-1"
                />
                <Content
                    title="Let there be rock!"
                    image="assets/img/03.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    order1="order-lg-1"
                    order2="order-lg-2"
                />
            </div>
        );
    }
}

export default ControlContent;