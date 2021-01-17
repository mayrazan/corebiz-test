export function Input(props) {
  const { type, className, placeholder, required, value, setValue } = props;

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    ></input>
  );
}
