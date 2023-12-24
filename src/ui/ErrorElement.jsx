import { useNavigate, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div>
      <h1>Hello there👋</h1>
      <p>{error.data}</p>

      <button
        className="text-primary text-sm hover:underline"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
};

export default ErrorElement;
