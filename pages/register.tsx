import { useMutation } from 'react-query';
import { loginApi } from '../src/services/zAdminApi';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

function Login() {
  const loginMutation = useMutation<any, any, any>(({ username, password }) =>
    loginApi({ username, password })
  );
  const formClass = cx('form auth-page__form', {
    'form--is-error': loginMutation.isError,
  });
  return (
    <div className="page auth-page">
      <div className="card auth-page__card">
        <div className="auth-page__head-container">
          <h1 className="headline-1 auth-page__logo-text">S|M</h1>
          <h1 className="headline-1 auth-page__headline">Sign Up</h1>
          <p className="subtext auth-page__subtext">
            Register untuk masuk sebagai individu
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
                name="passowrd"
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
            Already Have Account ?{' '}
            <a href="#" className="link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
