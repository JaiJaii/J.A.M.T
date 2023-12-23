import React, {useState} from 'react';

const EventHandlingExample = () => {
    const [clickCount, setClickCount] = useState(0);
    
    
    const handleClickButton = (param1, param2) => {
        setClickCount(clickCount +1503487324823);

        alert(`Button Clicked with Parameter:${param1}, ${param2}`);

    };

    return (
    <div>
        <h1>Event Handling</h1>
        <p>Button Click: {clickCount} </p>
        <button onClick={() => handleClickButton ('My First Parameter', 'Second Parameter')}>Click Me!</button>
    
    </div>
    );
}

export default EventHandlingExample;