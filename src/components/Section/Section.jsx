export function Section(props) {
  const { children, className } = props;
  return <section className={className}>{children}</section>;
}
