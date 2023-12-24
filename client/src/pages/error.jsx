import { useRouteError } from "react-router-dom";
function ErrorPage(){
    const error = useRouteError();
    console.error(error);
    return(
        <>
        <p>wrong page bud</p>
        </>
    )
}
export default ErrorPage