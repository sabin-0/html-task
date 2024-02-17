import React, {useState} from 'react';

// function Login() {
//     let [isLoggedIn, setIsloggedIn] = useState(false);
//     let content;

//     if(isLoggedIn) {
//         content = <div>welcome, you are logged in</div>
//     }else {
//         content = <div>Please login</div>
//     }

//     return(
//         <>
//         {content}
//         </>
//     )
// }

function Login() {
    let [isLoggedIn, setIsLoggedIn] = useState(true);
    let content;

    return(
        <>
        {isLoggedIn?(<div>Welcome you are logged in</div>):(<div>Please Login</div>)}
        </>
    )

}

export default Login;