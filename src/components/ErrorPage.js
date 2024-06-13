import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();

// console.log(err);

    return(
        <div className="errorPage">
            <div>
            <h1>{err.status} {err.statusText}</h1>
            <hr />
            <h4>{err.data}</h4>
            </div>
        </div>
    );
}

export default ErrorPage;