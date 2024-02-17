//Uncontrolled components are react components where form elements maintain their own state, and react is not directly involved in managing their state. We can still access their values using refs, but react does not control or manipulate the state of these components.

import React,{useRef} from "react";

function Uncontrolled() {
    let inputRef = useRef(null);

    const handleButtonClick = (e) => {
        alert(`Input Value : ${inputRef.current.value}`);
    }

    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Get Input Value</button>
        </>
    )
}

export default Uncontrolled;

//In this functional component we use the useRef hook to create a refernce to the input element(inputRef). The inpu maintains its own state and when the button is clicked, we access the inputs value using the ref.React is not directly controlling the input's value in this case.