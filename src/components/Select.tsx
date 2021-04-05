import { default as ReactSelect, Props as SelectProps } from 'react-select';
import cx from 'classnames';

interface Props extends SelectProps {
  label?;
  type?;
  subClass?;
  errors?;
}

export default function Select(props: Props) {
  const inputClass = cx('field fieldset__field', props.subClass, {
    'field--is-error': props.errors ? props.errors[props.name] : false,
  });
  const placeholderText = props.placeholder || `Select ${props.label}`;
  return (
    <div className={inputClass}>
      <label className="label">{props.label}</label>
      <ReactSelect
        {...props}
        classNamePrefix="react-select"
        placeholder={placeholderText}
      />
    </div>
  );
}
