import React, {Component} from 'react';
import ClassTest from './ClassTest';

class ClassProps extends Component{
    render() {

        return(

            <div>

                <ClassTest empName='Juan Dela Cruz' empPosition='President' company='ABC Company'/>
                <ClassTest empName='Peter Dela Cruz' empPosition='Vice President' company='ABC Company'/>
                <ClassTest empName='John Doe' empPosition='Manager' company='ABC Company'/>

            </div>
        )
    }
}

export default ClassProps