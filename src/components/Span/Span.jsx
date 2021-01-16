export function Span(props) {
  const { value, className, children } = props;

  return (
    <span className={className}>
      {value}
      {children}
    </span>
  );
}
