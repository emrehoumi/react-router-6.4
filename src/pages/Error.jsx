import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const { message } = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred!</h1>
        <p>{message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
