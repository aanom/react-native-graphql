import ErrorBoundary from "../modules/errors/errorBoundary";
import Customer from "./customer";

const Customers = () => {
    return(
        <ErrorBoundary>
            <Customer/>
        </ErrorBoundary>
    )
}

export default Customers;