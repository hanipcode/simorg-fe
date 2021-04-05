import '../styles/index.scss';
import * as eva from 'eva-icons';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useProtectedRoute from '../src/hooks/useProtectedRoute';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      try {
        eva.replace();
      } catch (err) {
        //
      }
    }
  }, []);
  useProtectedRoute();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
