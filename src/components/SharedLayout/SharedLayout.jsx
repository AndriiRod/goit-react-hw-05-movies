import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader/';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
