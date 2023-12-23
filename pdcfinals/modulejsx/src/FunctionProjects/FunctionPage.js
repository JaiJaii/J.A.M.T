import React from 'react';

function FunctionPage(props){
    return(
        <div>

            <h1>{props.empName}</h1>
            <h3>{props.empPosition}</h3>
            <p>{props.company}</p>
            <button type='button' class='btn btn-success'> Edit </button>

        </div>
    )
}

export default FunctionPage;