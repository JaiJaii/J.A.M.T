import React, {useState} from "react";

function ParentComponent(){

    const [message, setMessage] = useState ("From Parent")
    
    const updateMessage=()=>{
        setMessage("")
    }

    const handleInputChange = (event)=>{
        setMessage(event.target.value);
    }

    return(
        <div>
            <h1>Data Flow Parent-Child Callback</h1>
            <input type="text" onChange={handleInputChange} value={message}/>
            <button onClick={updateMessage}>Clear Textbox</button>

            <ChildComponent message={message}/>
        </div>
    );
}

function ChildComponent(props){
    return(
        <div>
            <h1>Child  Component</h1>
            <p>Message from Parent: {props.message}</p>
        </div>
    );
}
export default ParentComponent;