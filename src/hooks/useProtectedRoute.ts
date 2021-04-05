import { useRouter } from 'next/router';
import * as pathMatch from 'path-to-regexp';
import { useEffect } from 'react';
import { getToken } from '../services/localService';

export default function useProtectedRoute() {
  const router = useRouter();
  const UnprotectedRoute = ['/login', '/register'];
  useEffect(() => {
    if (
      !UnprotectedRoute.some((name) =>
        pathMatch.pathToRegexp(name).test(router.pathname)
      ) &&
      !getToken()
    ) {
      router.push({
        pathname: '/login',
        query: {
          unauthenticated: true,
        },
      });
    }
  }, [router.pathname]);
}
