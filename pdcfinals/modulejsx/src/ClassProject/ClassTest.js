import React, {Component} from 'react';
import '../App.css';

class ClassTest extends Component{
    render() {

        return(

            <div>

                <h1> {this.props.empName} </h1>
                <h3> {this.props.empPosition} </h3>
                <p class='label'>{this.props.company}</p>
                <button type='button' class='btn btn-success'> Edit </button>

            </div>
        )
    }
}

export default ClassTest