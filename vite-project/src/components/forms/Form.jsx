import React,{useState} from "react";

function Form({onSubmit}) {
    console.log("Form component rendering");

    const  [inputData , setInputData] = useState({
        name : '',
        email : '',
    });

    const handleChange =(e) => {
        e.preventDefault();
        // setInputData(e.target.value);

        if(e.target.name === "name" ) {
            setInputData({
                ...inputData,
                name : e.target.value,
            })
        }

        if(e.target.name === "email") {
            setInputData({
                ...inputData,
                email : e.target.value,
            })
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit(inputData);
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange}/>
            <input type="email" name="email" id="email" placeholder="enter your email" onChange={handleChange} />
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}

export default Form;