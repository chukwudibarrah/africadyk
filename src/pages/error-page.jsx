import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center grid content-center h-screen">
      <h1 className="text-6xl font-extrabold">Oops!</h1>
      <p className="text-2xl my-6">Sorry, but we seem to have run into a problem.<br/>Don't worry, it's not you, it's us. Really.</p>
      <p className="text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}