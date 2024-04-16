import React from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const errorMsg=useRouteError();
    return(
        <div>
            {/* <h2>404</h2>
            <p>Page not found</p> */}
            <p>{errorMsg?.status}</p>
            <p>{errorMsg?.statusText}</p>
            <p>Something went wrong</p>
        </div>
    )
}

export default Error;