import cx from 'classnames';

export default function Input({
  label = 'Input Label',
  name,
  type = 'text',
  subClass = '',
  errors = {},
  placeholder = '',
}) {
  const inputClass = cx('field', subClass, {
    'field--is-error': errors[name],
  });
  const placeholderText = placeholder || `Enter ${label}`;
  return (
    <div className={inputClass}>
      <label className="label">{label}</label>
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholderText}
      />
    </div>
  );
}
