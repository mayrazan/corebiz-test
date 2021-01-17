export function Button(props) {
  const { onClick, className, text } = props;

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
