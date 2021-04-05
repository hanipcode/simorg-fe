import cx from 'classnames';
import {
  default as ReactDatPicker,
  DatePickerProps,
} from 'react-date-picker/dist/entry.nostyle';

interface Props extends DatePickerProps {
  label?;
  name;
  subClass?;
  errors?;
}
export default function DatePicker({
  label = 'Input Label',
  name,
  subClass = '',
  errors = {},
  ...props
}: Props) {
  const inputClass = cx('field', subClass, {
    'field--is-error': errors[name],
  });
  return (
    <div className={inputClass}>
      <label className="label">{label}</label>
      <ReactDatPicker
        {...props}
        format="dd/MM/yyyy"
        value={new Date(1995, 9, 7)}
        name={name}
        className="react-datepicker"
      />
    </div>
  );
}
