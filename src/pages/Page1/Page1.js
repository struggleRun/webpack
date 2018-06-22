import React, {Component} from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page1~
                <img  src={require(`../../assets/logo.png`)}/>
            </div>
        )
    }
}