import { Link } from "../Link/Link";
import { Section } from "../Section/Section";
import "./ContactSection.scss";

export function ContactSection() {
  return (
    <Section className="contact">
      <ul>
        <li>
          <Link href="/fale-conosco" text="Entre em contato" className="link"/>
        </li>
        <li>
          <Link href="/chat" text="Fale com o nosso consultor online" className="link"/>
        </li>
      </ul>
    </Section>
  );
}
