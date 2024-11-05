import { useRouteError } from "react-router-dom"; // Importing useRouteError to capture route errors

// ErrorPage component to display error information when a route fails to load
export default function ErrorPage() {
    const error = useRouteError(); // Accessing the error object from the route

    return (
        <div id="error-page">
            {/* Displaying the error message */}
            <p>
                <i>{error.statusText || error.message}</i> {/* Shows the error status text or message if available */}
            </p>
        </div>
    );
}
