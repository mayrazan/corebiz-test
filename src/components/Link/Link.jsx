export function Link(props) {
  const { href, text, className } = props;

  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
}
