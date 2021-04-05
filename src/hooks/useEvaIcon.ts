import { useEffect } from 'react';
import * as eva from 'eva-icons';

/**
 * useEvaIcon is for debugging purpose only
 * because of hacky behavior of Next.js Fast Refresh if we use eva.replace only
 * in _app.js it doesn't run on every Fast Refresh
 * @export
 */
export default function useEvaIcon() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      try {
        eva.replace();
      } catch (error) {
        // meh
      }
    }
  });
}
