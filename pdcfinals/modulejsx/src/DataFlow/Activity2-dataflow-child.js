import React, {useState} from "react";

function ParentComponent(){

    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }

    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>

            <ChildComponent count = {count} onCount={increment}/>
        </div>
    );

}

function ChildComponent(props){
return(
    <div>
        <p>ChildComponent: Count - {props.count}</p>
        <button onClick={props.onCount}>Increment</button>
    </div>
);    



}
export default ParentComponent;