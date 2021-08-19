import React, { Component } from 'react'

class Webserviceone extends Component {
    constructor(props) {
        super(props);
    }

    MyFirstButton = () => {
        alert('In The Name Of Allah');
    }

    render() {
        return (
            <div>

                <h1> {this.props.name} </h1>

                <button onClick={this.MyFirstButton}>
                    My First Button
                </button>

            </div>



        );
    }
}

export default Webserviceone;