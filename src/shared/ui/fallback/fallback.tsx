import { routes } from "@/shared/config";
import { RejectedDataType } from "@/shared/types";
import { Link, useRouteError } from "react-router-dom";

const Fallback = () => {
    const error = useRouteError();
    const knownError = error as RejectedDataType;

    return (
        <div role="alert" className="fallback">
            <h1 className="fallback__img">Something went wrong</h1>
            <span className="fallback__describe">
                {knownError?.messageError} {knownError?.status}
            </span>
            <Link to={routes.home} className="fallback__link">
                Go to home page
            </Link>
        </div>
    );
};

export default Fallback;
