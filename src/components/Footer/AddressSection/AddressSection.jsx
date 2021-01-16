import { Section } from "../../Section/Section";
import { Text } from "../../Text/Text";
import { Link } from "../../Link/Link";
import "./AddressSection.scss";

export function AddressSection(props) {
  const { title } = props;

  return (
    <Section className="address">
      <h3>{title}</h3>
      <Text text="Avenida Andrômeda, 200. Bloco 6 e 8" className="text" />
      <Text text="Alphavile SP" />
      <Link href="mailto:brasil@corebiz.ag" text="brasil@corebiz.ag " className="link"/>
      <Link href="tel:+551130901039" text="+55 11 3090 1039" className="link"/>
    </Section>
  );
}
