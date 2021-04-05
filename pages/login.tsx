import { useMutation } from 'react-query';
import { loginApi } from '../src/services/zAdminApi';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import { useRouter } from 'next/router';
import useTimedQuery from '../src/hooks/useTimedQuery';
import useEvaIcon from '../src/hooks/useEvaIcon';

function Login() {
  useEvaIcon();
  const router = useRouter();
  const loginMutation = useMutation<any, any, any>(
    ({ username, password }) => loginApi({ username, password }),
    {
      onSuccess: () => {
        router.push('/dashboard');
      },
    }
  );
  const formClass = cx('form auth-page__form', {
    'form--is-error': loginMutation.isError,
  });
  const { matches } = useTimedQuery(['unauthenticated']);

  return (
    <div className="page auth-page">
      <div className="card auth-page__card">
        {matches.includes('unauthenticated') && (
          <div className="alert alert--danger alert--shake">
            <i data-eva="alert-circle-outline" className="alert__icon" />
            <p className="alert__text">Anda Belum Terlibat Login</p>
          </div>
        )}
        <div className="auth-page__head-container">
          <h1 className="headline-1 auth-page__logo-text">S|M</h1>
          <h1 className="headline-1 auth-page__headline">Sign In</h1>
          <p className="subtext auth-page__subtext">
            Login To Your Account To Continue
          </p>
        </div>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={(values) => {
            loginMutation.mutate(values);
          }}
        >
          <Form className={formClass}>
            <div className="field">
              <label className="label">Email</label>
              <Field
                name="username"
                className="input"
                placeholder="Enter Username"
              />
              {loginMutation.error?.errors?.username && (
                <p className="field__error-message">
                  {loginMutation.error?.errors?.username}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <Field
                name="password"
                type="password"
                className="input"
                placeholder="Enter Password"
              />
              {loginMutation.error?.errors?.password && (
                <p className="field__error-message">
                  {loginMutation.error?.errors?.password}
                </p>
              )}
            </div>
            <button type="submit" className="button auth-page__button">
              Log In
            </button>
          </Form>
        </Formik>
        <div className="auth-page__notice">
          <p>
            Doesn't have account ?{' '}
            <a href="#" className="link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
