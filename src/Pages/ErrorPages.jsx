import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPages = () => {


    const error = useRouteError()

    return <div>{error.message}</div>;

}

export default ErrorPages;