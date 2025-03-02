import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="mt-80">
        <div className="text-center">
          <h2 className="text-4xl text-center">404 ERROR:</h2>
          <h3 className="text-xl">
            This page does not exist at the moment. Don't worry, this page will
            be added as soon as it is ready ☺️.
          </h3>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
        <span className="loader-setting "></span>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We're working on untangling the code. Hang tight!
        </h3>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
