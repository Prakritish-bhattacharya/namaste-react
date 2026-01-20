import { useRouteError } from "react-router-dom";

const Error = ()=>{
   const err = useRouteError();
    console.log(err); // to see the error details in console
    return(
        <div>
            <h1>OOPs !!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
            <h4>{"You provide " + err.data}</h4>
        </div>
    )
}
export default Error;