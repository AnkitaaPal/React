import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong.</h2>
      <h4>
        {err.status} : {err.statusText}
      </h4>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
